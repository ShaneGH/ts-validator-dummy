import { init } from "ts-validator";

var keyMap = {
	"./src/my.ts?1": "140-215, ./src/my.ts",
};

var types = {
	"140-215, ./src/my.ts": {"name":"MyT","id":"140-215, ./src/my.ts","extends":[],"properties":[{"name":"val","type":{"__kind":2,"value":{"keyword":"string"}}}]},
};

var compilerArgs = {"strictNullChecks":true};

function initInternal () {
	init(keyMap, types, compilerArgs);
}

export {
	initInternal as init
}