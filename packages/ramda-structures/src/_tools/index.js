import { curryN } from "ramda";
import { safeMatch } from "../_internals";

export const match = curryN(2,safeMatch)
