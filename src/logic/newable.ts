import IComesFromString from "../types/i-comes-from-string";
import INewableWithString from "../types/i-newable-with-string";

export default class MadeFromString implements IComesFromString {
  constructor(public name: string) {
    console.log("ctor invoked");
  }
}

export function makeObj(n: INewableWithString) {
  return new n("hello!");
}