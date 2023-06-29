import IComesFromString from "../types/i-comes-from-string";
import IStringConstructable from "../types/i-newable-with-string";

export default class MadeFromString implements IComesFromString {
  constructor(public name: string) {
    console.log("ctor invoked");
  }
}

export function makeObj(n: IStringConstructable) {
  return new n("hello!");
}