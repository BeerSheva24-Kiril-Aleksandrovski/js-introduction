import { describe, expect, it } from "vitest";
import { makeGeneratorClosedRange, makeIterableBasedGenerator } from "../objects.mjs";
it("iterator test based on generator function", ()=>{
  //
    const iterator = makeGeneratorClosedRange(1, 3);
    const expected = [1, 2, 3];
    const actual = [];
    
    while(true) {
        const {value, done} = iterator.next();
        if(done) {
          break;
        }
        actual.push(value)
    }
    expect(actual).toEqual(expected);
});
it("iterable test based on generator function", () => {
  const iterable = makeIterableBasedGenerator(1, 3);
  const expected = [1, 2, 3];
  const actual = [];
  for (const num of iterable) {
    actual.push(num);
  }
  expect(actual).toEqual(expected);
  actual.length = 0;
  for  (const num of iterable) {
    actual.push(num);
  }
  expect(actual).toEqual(expected);
})