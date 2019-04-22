import { init as __initTsValidatorTypes } from "../ts-validator.validator-types";
import { validate } from "ts-validator.validator";
__initTsValidatorTypes();
var tt: {
    hello: number;
} = { hello: 9 };
validate(tt, "./src/my.ts?1");
