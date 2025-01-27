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
    it("numbers native sorting sorting", () => {
        const expected = [-10, 10, 30, 60, 1000];
        expect(array.toSorted((a, b) => a - b)).toEqual(expected);
    })
})

const array = [10, 1000, -10, 30, 60];
describe("array introspecting", () => {
    const objects = [
        { x: 4 },
        { x: 5 }
    ]
    it(" includes", () => {
        expect(array.includes(1000)).toBeTruthy();
        expect(array.includes(200)).toBeFalsy();
        expect(array.includes({ x: 4 })).toBeFalsy();
    });
    it(" testing for array of objects", () => {
        expect(objects.find(obj => obj.x === 4)).toBeTruthy();
        expect(objects.find(obj => obj.x === 1)).toBeFalsy();
    })
    it("testing for all elements match acondition", () => {
        expect(array.every(num => num % 2 === 0)).toBeTruthy();
        expect(array.some(num => num % 2 !== 0)).toBeFalsy();
    })
})

describe("slice, join, string-split", () => {
    it("slice method", () => {
        const array = [1, 2, 3, 4, 5];
        const expected = [2, 3, 4];
        expect(array.slice(1, 4)).toEqual(expected);
        const copyExpected = [1, 2, 3, 4, 5];
        expect(array.slice()).toEqual(copyExpected);
    })
    it("join method", () => {
        const expectedStr = "10;1000;-10;30;60";
        expect(array.join(";")).toBe(expectedStr);
        const arStr = expectedStr.split(/;/);
        expect(arStr).toEqual(array.map(s => s.toString()));
    })
})

describe("map / reduce", () => {
    array.map = myMap;
    array.reduce = myReduce;
    it("myMap testing", () => {
        const expected = [10, 1001, -8, 33, 64]     //array of elements where each element will be converted to element + index
        expect(array.map((e, index) => e + index)).toEqual(expected);
    })
    it("myReduce testing", () => {
        //TODO
        //write two reduce methods for taking sum of all array numbers
        //and minimal and maximal values for only one reduce call
    })
})