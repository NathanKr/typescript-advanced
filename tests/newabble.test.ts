import {test,expect} from 'vitest'
import MadeFromString, { makeObj } from '../src/logic/newable';
import IComesFromString from '../src/types/i-comes-from-string';

test('newable is working ok',()=>{
    const val : IComesFromString = makeObj(MadeFromString);
    const expected = 'hello!'
    expect(expected).toBe(val.name)
      
})