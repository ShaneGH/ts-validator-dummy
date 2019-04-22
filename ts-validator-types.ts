import { init } from "ts-validator";

var keyMap = {
	"./src/my.ts?1": "anonymous: 1",
	"./src/my.ts?2": "keyword: string",
};

var aliasedTypes = {
	"anonymous: 1": {"__kind":1,"value":{"id":"anonymous: 1","name":"anonymous: 1","aliased":{"__kind":5,"value":{"combinator":2,"left":{"__kind":6,"value":"140-215, ./src/my.ts"},"right":{"__kind":6,"value":"215-256, ./src/my.ts"}}}}},
	"keyword: string": {"__kind":1,"value":{"id":"keyword: string","name":"keyword: string","aliased":{"__kind":4,"value":"string"}}},
	"140-215, ./src/my.ts": {"__kind":1,"value":{"id":"140-215, ./src/my.ts","name":"MyT","aliased":{"__kind":3,"value":{"properties":[{"name":"val","type":{"__kind":4,"value":"string"}}]}}}},
	"215-256, ./src/my.ts": {"__kind":1,"value":{"id":"215-256, ./src/my.ts","name":"MyU","aliased":{"__kind":3,"value":{"properties":[{"name":"anotherVal","type":{"__kind":4,"value":"number"}}]}}}},
};

var compilerArgs = {"strictNullChecks":true};

function initInternal () {
	init(keyMap, aliasedTypes, compilerArgs);
}

export {
	initInternal as init
}