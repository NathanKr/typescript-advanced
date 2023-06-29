import IComesFromString from "./i-comes-from-string";

/**
 * class that implement this must have constructor 
 * with string as argument
 */
export default interface INewableWithString {
  new (n: string): IComesFromString;
}
