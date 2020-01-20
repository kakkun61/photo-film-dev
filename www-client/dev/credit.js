const fs = require('fs');
const lc = require('license-checker');
const elc = require('elm-license-checker');

lc.init(
    {
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
    },
    (err, jsLicenses) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        elc.init(
            { start: '.' },
            (err, elmLicenses) => {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                checkerThen(Object.assign(elmLicenses, jsLicenses));
            }
        );
    }
);

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
    <h1>Credits</h1>
    <dl>
      <dt>Photo Film Dev</dt>
      <dd>
        岡本和樹 (Kazuki Okamoto)<br>
        BSD 3-Clause License (Revised)<br>
        <a href="LICENSE.html">Full Text</a>
      </dd>
      <dt>elm/compiler</dt>
      <dd>
        Copyright 2012-present Evan Czaplicki<br>
        <a href="LICENSE.elm_compiler.txt">Full Text</a>
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
        <a href="LICENSE.noto-emoji.txt">Full Text</a>
      </dd>
    </dl>
  </body>
</html>
`;
}

function templateList(key, license) {
    let desc = '';
    if (typeof(license.copyright) === 'string' && license.copyright) {
        desc = `        ${license.copyright.replace(/ +/g, ' ')}`;
    }

    if (typeof(license.licenses) === 'string' && license.licenses && !license.licenses.includes('*')) {
        // '*' means guess
        if (desc) {
            desc += '<br>\n';
        }
        desc += `        ${license.licenses}`;
    }

    if (typeof(license.licenseFile) === 'string' && license.licenseFile) {
        if (desc) {
            desc += '<br>\n';
        }
        desc += `        <a href="LICENSE.${key.replace('/', '_')}.txt">Full Text</a>`;
    }

    return `      <dt>${key}</dt>` + (desc ? `\n      <dd>\n${desc}\n      </dd>` : '');
}

function copyLicenseFile(key, package) {
    const licenseFile = 'intermediate/LICENSE.' + key.replace('/', '_') + '.txt';
    if (fs.existsSync(licenseFile)) {
        fs.unlinkSync(licenseFile);
    }
    if (package.licenseFile) {
        fs.copyFileSync(package.licenseFile, licenseFile);
    }
}

function checkerThen(packages) {
    for (key in packages) {
        copyLicenseFile(key, packages[key]);
    }
    const creditFile = 'intermediate/credit.html';
    fs.writeFileSync(creditFile + 'tmp', template(packages));
    if (fs.existsSync(creditFile)) {
        fs.unlinkSync(creditFile);
    }
    fs.renameSync(creditFile + 'tmp', creditFile);
}
