/**
 *  
 * @param foo 
 * @returns 
 *  - foo * foo if foo is a number. e.g. return 9 if foo is 3
 *  - hello + foo if foo is a string. e.g. return 'hello 123' if foo is '123'
 */
export function stringOrNumber(foo: any): any {
    if (typeof foo === "number") {
      return foo * foo;
    } else if (typeof foo === "string") {
      return `hello ${foo}`;
    }
  }