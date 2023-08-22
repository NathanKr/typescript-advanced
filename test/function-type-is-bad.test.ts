import { test, expect, vi } from "vitest";
import { OnDispatchResult } from "../src/types/types";

test("function type with few argument ---> is not type safe", () => {
  // --- func is of type OnDispatchResult but missing one argument
  // --- yet no error
  const func: OnDispatchResult = (res: unknown) => {
    console.log(res);
  };

  function callMe(f: OnDispatchResult): void {
    f(1, "hello");
  }

  const spy = vi.spyOn(console, "log");

  // --- the 'hello' argument is lost !!!!!!!!! it is not logged by func
  // --- even though it is of type OnDispatchResult which has two arguments !!!
  callMe(func);
  // expect(spy).toBeCalledWith(1,'hello'); this is what i expect
  expect(spy).toBeCalledWith(1);
});


test("use class implementating interface : it is type safe and full solution", () => {
  interface IOnDispatchFunc {
    operate(res: unknown, action: string): void; // type OnDispatchResult
  }
  class AAA implements IOnDispatchFunc {
    // --- i can use one argument without problem at all so this class solution is not good
    // operate(res: unknown, action: string): void {
    //   console.log(res, action);
    // }
    // --- this is wrong but no protection from typescript
    operate(res: unknown): void {
      console.log(res);
    }
  }

  function callMe(obj: IOnDispatchFunc): void {
    obj.operate(1, "hello");
  }

  const obj = new AAA();
  const spy = vi.spyOn(console, "log");
  callMe(obj);
  expect(spy).toBeCalledWith(1, "hello");
  expect(spy).toBeCalledTimes(1);
});
