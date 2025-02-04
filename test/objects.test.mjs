import { describe, expect, it } from "vitest";
import { makeIteratorClosedRange, makeIterableClosedRange, makeGeneratorClosedRange, makeIterableBasedGenerator } from "../objects.mjs";
describe("iterator pattern test", () => {
    it("iterator test based on making iterator", () => {
        //
        const iterator = makeIteratorClosedRange(1, 3);
        const expected = [1, 2, 3];
        const actual = [];

        while (true) {
            const { value, done } = iterator.next();
            if (done) {
                break;
            }
            actual.push(value)
        }
        expect(actual).toEqual(expected);
    });
    it("terable test based on iterator", () => {
        const iterable = makeIterableClosedRange(1, 3);
        const expected = [1, 2, 3];
        const actual = [];
        for (const num of iterable) {
            actual.push(num);
        }
        expect(actual).toEqual(expected);
        actual.length = 0;
        for (const num of iterable) {
            actual.push(num);
        }
        expect(actual).toEqual(expected);
    })
    it("iterator test based on generator function", () => {
        //
        const iterator = makeGeneratorClosedRange(1, 3);
        const expected = [1, 2, 3];
        const actual = [];

        while (true) {
            const { value, done } = iterator.next();
            if (done) {
                break;
            }
            actual.push(value)
        }
        expect(actual).toEqual(expected);
    });
    it("terable test based on generator function", () => {
        const iterable = makeIterableBasedGenerator(1, 3);
        const expected = [1, 2, 3];
        const actual = [];
        for (const num of iterable) {
            actual.push(num);
        }
        expect(actual).toEqual(expected);
        actual.length = 0;
        for (const num of iterable) {
            actual.push(num);
        }
        expect(actual).toEqual(expected);
    })
})