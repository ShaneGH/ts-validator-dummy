
push-location ../ts-validator

npm run build
if (-not $?) {
    pop-location
    return;
}

# mocha "C:\Dev\ts-validator\test\testBin\test\validation-rewriter\rewriteTests.js"
mocha "C:\Dev\ts-validator\test\testBin\test\code-gen\executorTests.js"

pop-location