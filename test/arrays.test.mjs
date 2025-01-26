import { describe, it, expect } from 'vitest'
describe("finding elements in array", () => {
    it("method indexOf / lastIndexOf for primitives", () => {
        const ar = [1, 2, 3, 2, 4];
        expect(ar.indexOf(20)).toBe(-1);
        expect(ar.indexOf(2)).toBe(1);
        expect(ar.lastIndexOf(2)).toBe(3);
    })
    it("getting index of an object inside array", () => {
        const obj1 = { x: 10 };
        const ar = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
            obj1
        ];
        expect(ar.indexOf({ x: 4 })).toBe(-1);
        expect(ar.indexOf(obj1)).toBe(3);
        expect(ar.findIndex(obj => obj.x === 5)).toBe(1);
        expect(ar.findIndex(obj => obj.x === 20)).toBe(-1);
    })
    it("finding object in array", () => {
        const obj1 = { x: 10 };
        const ar = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
            obj1
        ];
        expect(ar.find(obj => obj.x === 5)).toEqual({ x: 5 });
    });
    it("finding several objects/primitives matching a predicate", () => {
        const arPrimitives = [1, 2, -3, 2, 4];
        const arObjects = [
            { x: 4 },
            { x: 5 },
            { x: 6 },
        ];
        expect(arPrimitives.filter(num => num % 2 != 0)).toEqual([1, -3]);
        expect(arObjects.filter(obj => obj.x % 2 === 0)).toEqual([{ x: 4 }, { x: 6 }])
    })
})

describe("iterating elements of array", () => {
    const ar = [1, 2, 3, 4];
    it("printing out elements using for-in", () => {
        for (let i in ar) {
            console.log(ar[i]);
        }
    })
    it("printing out elements using for-of", () => {
        for (let num of ar) {
            console.log(num);
        }
    })
    it("printing out elements using forEch method", () => {
        ar.forEach(e => console.log(e));
    })
    it("printing out index and element from array", () => {
        ar.forEach((e, i) => console.log(`index: ${i}; element: ${e}`))
    })
})

describe("sorting array", () => {
    const array = [10, 1000, -10, 30, 60]
    it("numbers native sorting soting", () => {
        const expected = [-10, 10, 30, 60, 1000];
        expect(array.toSorted((a, b) => a - b)).toEqual(expected);
    })

})