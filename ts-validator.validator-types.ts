import { init } from "ts-validator.validator";

var keyMap = {
	"./src/my.ts?1": "anonymous: 1",
};

var aliasedTypes = {
	"anonymous: 1": {"__kind":2,"value":{"id":"anonymous: 1","name":"anonymous: 1","aliased":{"__kind":4,"value":{"properties":[{"name":"hello","type":{"__kind":5,"value":"number"}}]}}}},
};

var compilerArgs = {"strictNullChecks":true};

function initInternal () {
	init(keyMap, aliasedTypes, compilerArgs);
}

export {
	initInternal as init
}