PWSH = pwsh

SRC_FILES = $(foreach file,$(wildcard src/*),$(notdir $(file)))
INTERMEDIATE_FILES = $(foreach file,$(SRC_FILES),intermediate/$(file))

dist: node_modules elm-mdc/material-components-web.css elm-mdc/elm-mdc.js intermediate/credit.html $(INTERMEDIATE_FILES)
	npx parcel build -d dist intermediate/index.html intermediate/credit.html
	$(PWSH) -Command "& { git rev-parse HEAD | Out-File .\dist\revision }"
	$(PWSH) -Command "& { Copy-Item -Force .\intermediate\CNAME .\dist\ }"

node_modules: package.json package-lock.json elm-mdc/package.json elm-mdc/package-lock.json
	npm install

elm-mdc/%: | elm-mdc

elm-mdc: ../.gitmodules
	git submodule update --init

elm-mdc/material-components-web.css: elm-mdc/node_modules/material-components-web/dist/material-components-web.css
	$(PWSH) -Command "& { Copy-Item .\elm-mdc\node_modules\material-components-web\dist\material-components-web.css .\elm-mdc\material-components-web.css }"

elm-mdc/node_modules/material-components-web/dist/material-components-web.css: | node_modules

elm-mdc/elm-mdc.js: node_modules elm-mdc/src/elm-mdc.js elm-mdc/webpack.config.js
	npm explore elm-mdc -- npm run build

intermediate:
	$(PWSH) -Command "& { New-Item -Type Directory .\intermediate }"

intermediate/credit.html: node_modules dev/credit.js intermediate/COPYING.html | intermediate
	node dev/credit.js

intermediate/%: src/% | intermediate
	$(PWSH) -Command "& { if (Test-Path -Type Leaf '$<') { Copy-Item '$<' '$@' } elseif (Test-Path -Type Container '$@') { Set-ItemProperty -Path '$@' -Name LastWriteTime -Value $$(Get-Date) } else { New-Item -Type Directory '$@' } }"

.PHONY: format
format:
	$(PWSH) -Command "& { Get-ChildItem -Path src -Include *.elm -Recurse | ForEach-Object { npx elm-format --yes $$_ } }"

.PHONY: lint
lint:
	npx elm-analyse

.PHONY: lint-server
lint-server:
	npx elm-analyse --server

.PHONY: devserver
devserver: clean-cache node_modules elm-mdc/material-components-web.css elm-mdc/elm-mdc.js intermediate/credit.html $(INTERMEDIATE_FILES)
	npx parcel intermediate/index.html intermediate/credit.html

.PHONY: server
server: clean-cache dist
	npx http-server -- dist

.PHONY: clean
clean: clean-cache
	- $(PWSH) -Command "& { Remove-Item -Recurse -Force -Path .\elm-mdc\material-components-web.css, .\elm-mdc\elm-mdc.js, .\dist, .\intermediate -ErrorAction Ignore }"

.PHONY: clean-cache
clean-cache:
	- $(PWSH) -Command "& { Remove-Item -Recurse -Force -Path .\.cache -ErrorAction Ignore }"

.PHONY: clean-full
clean-full: clean
	- $(PWSH) -Command "& { Remove-Item -Recurse -Force -Path .\elm-stuff, .\node_modules, .\elm-mdc\node_modules -ErrorAction Ignore }"

pages-path=../../photo-film-dev-pages

.PHONY: gh-pages
gh-pages: $(pages-path)
	$(PWSH) -Command "& {\
		Remove-Item -Recurse $(pages-path)\*;\
		Copy-Item -Recurse -Force .\dist\* $(pages-path);\
		Push-Location $(pages-path);\
		git add .;\
		git commit -m $$(Get-Content .\revision);\
		Pop-Location\
	}"

$(pages-path):
	git worktree add -f $(pages-path) gh-pages
