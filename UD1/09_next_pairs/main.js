const assert = require('assert').strict;

function nextPairs(value) {
    let result = [];
    if (value % 2 === 0) {
        result = [value - 2, value + 2];
    } else {
        result = [value - 1, value + 1];
    }
    console.log(result);
    return result;
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])

console.log('test ok')