Task Setup {
    Exec { npm install }
}

Task MdcBuild {
    Exec { npm explore elm-mdc -- npm run build }
}

Task DevServer {
    Exec { npx parcel .\src\index.html .\src\credit.html }
}

Task Format {
    Exec { Get-ChildItem -Path src -Include *.elm -Recurse | ForEach-Object { npx elm-format --yes $_ } }
}

Task CreditBuild {
    Exec { npm run credit }
}

Task Build -depends MdcBuild, CreditBuild {
    Exec {
        npx parcel build -d dist .\src\index.html .\src\credit.html
        git rev-parse HEAD | Out-File .\dist\revision
    }
}

Task Server {
    Exec { npx http-server -- dist }
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
