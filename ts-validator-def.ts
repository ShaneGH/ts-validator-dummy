import { deserialize, validateType } from 'ts-validator'

const keyMap: {[key: string]: string} = {
	"C:/Dev/ts-validator-dummy/src/my.ts?1": "string",
};

const types = deserialize({
	"string": {"name":"string","id":"string","extends":[{"__kind":2,"value":{"keyword":"string"}}],"properties":[]},
});

const compilerArgs = {"strictNullChecks":true};

export function validate<T>(subject: T, key: string) {

	if (!key) {
		throw new Error("There was no key specified for validation. Do you need to re-compile your ts code?")
	}

	const map = keyMap[key];
	if (!map) {
		throw new Error(`Invalid validation key ${key}. Do you need to re-compile your ts code?`);
	}

	const type = types.tryGet(map);
	if (!type) {
		throw new Error(`Could not find type for validation key ${key}, type key ${map}. Do you need to re-compile your ts code?`);
	}

	return validateType(subject, type(), compilerArgs);
};