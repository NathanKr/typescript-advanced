/**
 * any one implementing this interface can be called with one of this signitures
 */
export default interface ICallable {
  (foo: string): string;
  (foo: number): number;
}



