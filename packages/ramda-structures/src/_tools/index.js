import { curryN } from "ramda";
import { getInnerValue, safeMatch } from "../_internals";

export const match = curryN(2,safeMatch)
export const toPrimitive = getInnerValue;