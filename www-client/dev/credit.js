const fs = require('fs');
const checker = require('license-checker');

checker.init({
    start: '.',
    production: true,
    customFormat: {
        name: true,
        version: false,
        description: false,
        repository: false,
        publisher: false,
        email: false,
        url: false,
        copyright: true,
        licenses: false,
        licenseFile: true,
        licenseText: false,
        licenseModified: false,
        path: false
    }
}, checkerThen);

function template(packages) {
    const list = [];
    for (key in packages) {
        list.push(templateList(key, packages[key]));
    }

    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=yes">
    <title>Photo Film Dev</title>
  </head>
  <body>
    <h1>クレジット</h1>
    <dl>
      <dt>Photo Film Dev</dt>
      <dd>
        岡本和樹 (Kazuki Okamoto)<br>
        BSD 3-Clause License (Revised)<br>
        <a href="LICENSE.html">全文</a>
      </dd>
      <dt>elm/compiler</dt>
      <dd>
        Copyright 2012-present Evan Czaplicki<br>
        <a href="LICENSE.elm_compiler.txt">全文</a>
      </dd>
      <dt>elm/core</dt>
      <dd>
        Copyright 2014-present Evan Czaplicki<br>
        <a href="LICENSE.elm_core.txt">全文</a>
      </dd>
      <dt>elm/browser</dt>
      <dd>
        Copyright 2017-present Evan Czaplicki<br>
        <a href="LICENSE.elm_browser.txt">全文</a>
      </dd>
      <dt>elm/html</dt>
      <dd>
        Copyright (c) 2014-present, Evan Czaplicki<br>
        <a href="LICENSE.elm_html.txt">全文</a>
      </dd>
      <dt>elm/time</dt>
      <dd>
        Copyright (c) 2018-present, Evan Czaplicki<br>
        <a href="LICENSE.elm_time.txt">全文</a>
      </dd>
      <dt>elm/json</dt>
      <dd>
        Copyright 2014-present Evan Czaplicki<br>
        <a href="LICENSE.elm_json.txt">全文</a>
      </dd>
      <dt>elm/url</dt>
      <dd>
        Copyright (c) 2016, Evan Czaplicki<br>
        <a href="LICENSE.elm_url.txt">全文</a>
      </dd>
      <dt>elm/virtual-dom</dt>
      <dd>
        Copyright (c) 2016-present, Evan Czaplicki<br>
        <a href="LICENSE.elm_virtual-dom.txt">全文</a>
      </dd>
${list.join('\n')}
      <dt>Clock-Alarm03-01(Loop).mp3</dt>
      <dd>
        OtoLogic<br>
        <a href="https://creativecommons.org/licenses/by/4.0/deed.ja"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg"></a><br>
        <a href="https://otologic.jp/free/se/clock01.html">https://otologic.jp/free/se/clock01.html</a>
      </dd>
      <dt>favicon.ico, icon.192.png, icon.512.png</dt>
      <dd>
        Noto Emoji<br>
        <a href="LICENSE.noto-emoji.txt">全文</a>
      </dd>
    </dl>
  </body>
</html>
`;
}

function templateList(key, package) {
    let copyright = '';
    switch (typeof(package.copyright)) {
        case 'string':
            copyright = `        ${package.copyright.replace(/ +/g, ' ')}<br>\n`
            break;
    }
    
    return `      <dt>${key}</dt>
      <dd>
${copyright}        <a href="LICENSE.${key.replace('/', '_')}.txt">全文</a>
      </dd>`;
}

function copyLicenseFile(key, package) {
    const licenseFile = 'src/LICENSE.' + key.replace('/', '_') + '.txt';
    if (fs.existsSync(licenseFile)) {
        fs.unlinkSync(licenseFile);
    }
    fs.copyFileSync(package.licenseFile, licenseFile);
}

function checkerThen(err, packages) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    for (key in packages) {
        copyLicenseFile(key, packages[key]);
    }
    const creditFile = 'src/credit.html';
    fs.writeFileSync(creditFile + 'tmp', template(packages));
    if (fs.existsSync(creditFile)) {
        fs.unlinkSync(creditFile);
    }
    fs.renameSync(creditFile + 'tmp', creditFile);
}
