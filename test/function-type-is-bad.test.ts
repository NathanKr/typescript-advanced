import { test, expect, vi } from "vitest";
import { OnDispatchResult } from "../src/types/types";
import { IOnDispatchResult } from "../src/types/i-on-dispatch-result";

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

test("use object ---> it is type safe but not full solution", () => {
  const obj1: IOnDispatchResult = {
    res: undefined,
    action: "",
  };
  function callMe(obj: IOnDispatchResult): void {
    obj.res = 1;
    obj.action = "hello";
  }

  callMe(obj1);
  expect(obj1.action).toBe("hello");
  expect(obj1.res).toBe(1);
});

test("use class implementating interface : it is type safe and full solution", () => {
  interface IOnDispatchFunc {
    operate(res: unknown, action: string): void; // type OnDispatchResult
  }
  class AAA implements IOnDispatchFunc {
    operate(res: unknown, action: string): void {
      console.log(res, action);
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
