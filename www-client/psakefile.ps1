Task Setup -depends MdcSetup {
    Exec { npm install }
}

Task MdcSetup {
    Exec {
        git submodule update --init
        Push-Location .\elm-mdc
        npm install
        Pop-Location
    }
}

Task MdcBuild {
    Exec {
        Push-Location .\elm-mdc
        npm run build
        Pop-Location
    }
}

Task DevServer {
    Exec { & "$(npm bin)\parcel.ps1" -- .\src\index.html .\src\credit.html}
}

Task Format {
    Exec { Get-ChildItem -Path src -Include *.elm -Recurse | ForEach-Object { & "$(npm bin)\elm-format.ps1" -- --yes $_ } }
}

Task CreditBuild {
    Exec { npm run credit }
}

Task Build -depends MdcBuild, CreditBuild {
    Exec {
        & "$(npm bin)\parcel.ps1" -- build -d dist .\src\index.html .\src\credit.html
        git rev-parse HEAD | Out-File .\dist\revision
    }
}

Task Server {
    Exec { & "$(npm bin)\http-server.ps1" -- dist }
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
