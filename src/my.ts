import { init as __initTsValidatorTypes } from "../ts-validator-types";
import { validate } from "ts-validator";
__initTsValidatorTypes();
//validate("hello", "./src/my.ts?1");
type MyT = {
    val: string;
};
let yy: MyT = {} as any;
validate(yy, "./src/my.ts?1");
