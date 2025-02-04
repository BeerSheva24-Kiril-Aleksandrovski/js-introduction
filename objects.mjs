export function* makeGeneratorClosedRange(min, max) {
    for (let i = min; i <= max; i++) {
        yield i;
    }
}
export function makeIterableBasedGenerator(min, max) {
    return {
        [Symbol.iterator]: makeGeneratorClosedRange.bind(undefined, min, max)
    }
}