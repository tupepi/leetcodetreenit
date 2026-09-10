const assert = require("assert");
const findMedianSortedArrays = require("./0004MedianofTwoSortedArrays.js");

function test(description, fn) {
  try {
    fn();
    console.log(`OK: ${description}`);
  } catch (err) {
    console.error(`FAIL: ${description}`);
    console.error(err);
    process.exitCode = 1;
  }
}

test("esimerkki 1: [1,3] ja [2] -> 2", () => {
  assert.strictEqual(findMedianSortedArrays([1, 3], [2]), 2);
});

test("esimerkki 2: [1,2] ja [3,4] -> 2.5", () => {
  assert.strictEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
});

test("molemmat taulukot tyhjiä ei sallita, mutta toinen voi olla tyhjä: [] ja [1] -> 1", () => {
  assert.strictEqual(findMedianSortedArrays([], [1]), 1);
});

test("toinen tyhjä: [2] ja [] -> 2", () => {
  assert.strictEqual(findMedianSortedArrays([2], []), 2);
});

test("toinen tyhjä, parillinen pituus: [1,2] ja [] -> 1.5", () => {
  assert.strictEqual(findMedianSortedArrays([1, 2], []), 1.5);
});

test("negatiiviset luvut: [-5,-3,-1] ja [-4,-2] -> -3", () => {
  assert.strictEqual(findMedianSortedArrays([-5, -3, -1], [-4, -2]), -3);
});

test("yksittäiset alkiot: [1] ja [2] -> 1.5", () => {
  assert.strictEqual(findMedianSortedArrays([1], [2]), 1.5);
});

test("identtiset arvot: [1,1] ja [1,1] -> 1", () => {
  assert.strictEqual(findMedianSortedArrays([1, 1], [1, 1]), 1);
});

test("eripituiset taulukot: [1,2,3,4,5] ja [6,7,8,9,10] -> 5.5", () => {
  assert.strictEqual(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 5.5);
});

test("ei-päällekkäiset alueet: [1,2] ja [3,4,5,6,7] -> 4", () => {
  assert.strictEqual(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7]), 4);
});

test("suuret ääriarvot: [-1000000] ja [1000000] -> 0", () => {
  assert.strictEqual(findMedianSortedArrays([-1000000], [1000000]), 0);
});
