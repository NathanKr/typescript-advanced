<h2>Motivation</h2>
experiment with advanced typescript

<h2>Setup</h2>

```
pnpm i
```

<h2>Usage</h2>

```
pnpm test
```

<h2>Demo</h2>
<h3>Callable</h3>
any one implementing this interface can be called with one of this signitures

```ts
interface ICallable {
  (foo: string): string;
  (foo: number): number;
}

...............

  const overloaded: ICallable = stringOrNumber;

  const expected = 'hello 123';
  const actual = overloaded("123");

  // example usage
  expect(expected).toBe(actual);

```


<h3>Newable</h3>
anyone implementing this interface must create an instance using new and a specific constructor signiture

```ts
interface INewableWithString {
  new (n: string): IComesFromString;
}

.....
function makeObj(n: INewableWithString) {
  return new n("hello!");
}
.....
  const val : IComesFromString = makeObj(MadeFromString);
    const expected = 'hello!'
    expect(expected).toBe(val.name)
```    

<h3>Function as type is bad because typescript does not inforace the argument </h3>
This is bad

```ts
  // --- func is of type OnDispatchResult but missing one argument
  // --- yet no error
  const func: OnDispatchResult = (res: unknown) => {
    console.log(res);
  };
```

Using class and interface does not solve the issue

```ts
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
```
