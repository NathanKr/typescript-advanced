import { test, expect } from "vitest";
import { stringOrNumber } from "../src/logic/callable";
import ICallable from "../src/types/i-callable";


test("ICallable is ok with string", () => {
  const overloaded: ICallable = stringOrNumber;

  const expected = 'hello 123';
  const actual = overloaded("123");

  // example usage
  expect(expected).toBe(actual);
  const num = overloaded(123); // type of `num` is inferred as `number`
});

test("ICallable is ok with number", () => {
  // ---  this will not work because the signiture () => void does not match ICallable
  // const wrongOverloaded: ICallable = ()=> {}; 

    const overloaded: ICallable = stringOrNumber;
  
    const expected = 9;
    const actual = overloaded(3);
  
    // example usage
    expect(expected).toBe(actual);
  });
  