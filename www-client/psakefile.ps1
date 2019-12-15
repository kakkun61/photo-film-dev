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
    Exec { node_modules\.bin\parcel build -d dist .\src\index.html }
}

Task Server {
    Exec { node_modules\.bin\http-server dist }
}

Task Clean {
    Remove-Item -Recurse -Path .\dist\*
}
