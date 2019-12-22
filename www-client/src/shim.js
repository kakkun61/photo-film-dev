'use strict';

import { Elm } from './Main.elm'
import { default as NoSleep } from 'nosleep.js'
import 'material-components-web/dist/material-components-web.min.css'
import 'material-components-web/dist/material-components-web.min.js'
import 'elm-mdc/elm-mdc.js'
import './main.css'

let alarm = document.getElementById('alarm');
let noSleep = new NoSleep();

let app = Elm.Main.init({
  node: document.querySelector('main'),
  flags: {}
});

app.ports.playAlarm.subscribe(function() {
  alarm.play();
});

app.ports.stopAlarm.subscribe(function() {
  alarm.pause();
  alarm.currentTime = 0;
});

app.ports.alert.subscribe(function(msg) {
  window.alert(msg)
});

app.ports.setNoSleep.subscribe(function(active) {
  if (active) { noSleep.enable(); } else { noSleep.disable(); }
});
