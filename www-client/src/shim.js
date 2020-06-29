'use strict';

import { Elm } from './Main.elm'
import { default as NoSleep } from 'nosleep.js'
import 'elm-mdc/material-components-web.css'
import 'elm-mdc/elm-mdc.js'
import './mdc-override.css'
import './main.css'

const alarm = document.getElementById('alarm');
const noSleep = new NoSleep();

const app = Elm.Main.init({
  node: document.querySelector('main'),
  flags: { seed: getRandomInt() }
});

app.ports.playAlarmCmd.subscribe(() => {
  alarm.play();
});

app.ports.stopAlarmCmd.subscribe(() => {
  alarm.pause();
  alarm.currentTime = 0;
});

app.ports.alertCmd.subscribe(msg => {
  window.alert(msg)
});

app.ports.setNoSleepCmd.subscribe(active => {
  if (active) { noSleep.enable(); } else { noSleep.disable(); }
});

const firebaseConfig = {
  apiKey: "AIzaSyBCK8J5FxwyfgLh4p1GZ-pVJxTOhX0dO6M",
  authDomain: "photo-film-dev.firebaseapp.com",
  databaseURL: "https://photo-film-dev.firebaseio.com",
  projectId: "photo-film-dev",
  storageBucket: "photo-film-dev.appspot.com",
  messagingSenderId: "817422079794",
  appId: "1:817422079794:web:407643ce7f88b9c4dc692b",
  measurementId: "G-SJ49DC922T"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth();
const firestore = firebase.firestore();

app.ports.logInWithGoogleCmd.subscribe(() => {
  auth.signInWithRedirect(googleAuthProvider);
});

app.ports.logInWithTwitterCmd.subscribe(() => {
  auth.signInWithRedirect(twitterAuthProvider);
});

let unsubscribeRecipes = undefined;

app.ports.getUserCmd.subscribe(() => {
  auth.getRedirectResult().then((credential) => {
    if (credential.user) {
      const { uid, displayName } = credential.user;
      const user = { uid: uid, displayName: displayName }
      app.ports.changeUserSub.send(user);
      unsubscribeRecipes = firestore.collection('recipes').where('owner', '==', uid).onSnapshot((snapshot) => {
        const recipes = [];
        snapshot.forEach((doc) => {
          recipes.push(doc.data());
        })
        app.ports.changeRecipesSub.send(recipes);
      });
    }
  }).catch((error) => {
    console.log(error);
    app.ports.errorSub.send(error.toString());
  });
});

app.ports.logOutCmd.subscribe(() => {
  unsubscribeRecipes();
  auth.signOut().then(function() {
    app.ports.changeUserSub.send(null);
  }).catch(function(error) {
    console.log(error);
    app.ports.errorSub.send(error);
  });
});

app.ports.setRecipeCmd.subscribe((recipe) => {
  const user = auth.currentUser;
  recipe.owner = user.uid;
  firestore.collection('recipes').doc(recipe.id).set(recipe);
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
function getRandomInt() {
  const min = Math.ceil(0);
  const max = Math.floor(16777217); // https://stackoverflow.com/a/3793950/1567363
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
