.PHONY: build
build: build-mdc dist

dist: node_modules elm-mdc/material-components-web.css elm-mdc/elm-mdc.js src/credit.html
	npx parcel build -d dist .\src\index.html .\src\credit.html
	powershell "git rev-parse HEAD | Out-File .\dist\revision"

.PHONY: build-mdc
build-mdc: node_modules elm-mdc/material-components-web.css elm-mdc/elm-mdc.js

node_modules: package.json package-lock.json elm-mdc elm-mdc/package.json elm-mdc/package-lock.json
	npm install

elm-mdc: ../.gitmodules
	git submodule update --init

elm-mdc/material-components-web.css: elm-mdc/node_modules/material-components-web/dist/material-components-web.css
	powershell "Copy-Item .\elm-mdc\node_modules\material-components-web\dist\material-components-web.css .\elm-mdc\material-components-web.css"

elm-mdc/elm-mdc.js: elm-mdc/src/elm-mdc.js elm-mdc/webpack.config.js
	powershell "npm explore elm-mdc -- npm run build"

src/credit.html: node_modules dev/credit.js
	node dev/credit.js

.PHONY: format
format:
	powershell "Get-ChildItem -Path src -Include *.elm -Recurse | ForEach-Object { npx elm-format --yes $$_ }"

.PHONY: devserver
devserver:
	npx parcel .\src\index.html .\src\credit.html

.PHONY: server
server:
	npx http-server -- dist

.PHONY: clean
clean:
	-powershell "Remove-Item -Recurse -Force -Path .\elm-mdc\material-components-web.css, .\elm-mdc\elm-mdc.js, .\dist -ErrorAction Ignore"

.PHONY: clean-full
clean-full: clean
	-powershell "Remove-Item -Recurse -Force -Path .\.cache, .\elm-stuff, .\node_modules, .\elm-mdc\node_modules -ErrorAction Ignore"

page-path=..\..\photo-film-dev-pages

.PHONY: gh-pages
gh-pages: $(page-path)
	powershell "Copy-Item -Recurse -Force .\dist\* $(pages-path); Push-Location $(pages-path); git add .; git commit -m $$(Get-Content .\revision); Pop-Location"

$(page-path):
	git worktree add $(pages-path) gh-pages
