import {describe, it, expect} from 'vitest'
describe("removing elements from array array", () => {
    
    it("removing first element", () => {
        const ar = [1, 2, 3, 4];
        const expected = [ 2, 3, 4];
        ar.shift();
        expect(ar).toEqual(expected);
    })
    it("removing last element", () => {
        const ar = [1, 2, 3, 4];
        const expected = [ 1, 2, 3];
        ar.pop();
        expect(ar).toEqual(expected);
    })
    it("removing elements from middle of array", () => {
        const ar = [1, 2, 3, 4];
        const expected = [ 1, 4];
        ar.splice(1,2)
        expect(ar).toEqual(expected);
    })
})