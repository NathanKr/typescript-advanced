export function stringOrNumber(foo: any): any {
    if (typeof foo === "number") {
      return foo * foo;
    } else if (typeof foo === "string") {
      return `hello ${foo}`;
    }
  }