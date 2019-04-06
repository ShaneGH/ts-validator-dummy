import { validate } from "ts-validator";
validate("hello");

type TTT = {val1: 5, val2: TTT}
var yy: TTT = {} as TTT;

validate(yy);
