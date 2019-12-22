Task Setup {
    Exec { npm install }
}

Task DevServer {
    Exec { node_modules\.bin\parcel src\index.html }
}

Task Format {
    Exec { Get-ChildItem -Path src -Include *.elm -Recurse | ForEach-Object { node_modules\.bin\elm-format --yes $_ } }
}

Task Build {
    Exec {
        node_modules\.bin\parcel build -d dist .\src\index.html
        git rev-parse HEAD | Out-File .\dist\revision
    }
}

Task Server {
    Exec { node_modules\.bin\http-server dist }
}

Task Clean {
    Remove-Item -Recurse -Path .\dist\*
}

Task gh-pages {
    $pagesPath = '..\..\photo-film-dev-pages'
    if (-not (Test-Path -PathType Container -Path $pagesPath)) {
        Exec { git worktree add $pagesPath gh-pages }
    }
    Copy-Item -Recurse -Force .\dist\* $pagesPath
    Push-Location $pagesPath
    Exec {
        git add .
        git commit -m $(Get-Content .\revision)
    }
    Pop-Location
}