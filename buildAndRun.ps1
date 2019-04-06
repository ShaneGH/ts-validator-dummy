push-location ../ts-validator
if (-not $?) {
    pop-location
    return
}

npm run dummy
pop-location
if (-not $?) {
    return
}

npm run test