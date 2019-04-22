push-location ../ts-validator/ts-validator.code-gen

npm run build
pop-location
if (-not $?) {
    return
}

npm run test