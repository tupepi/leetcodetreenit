const assert = require("assert");
const reverse = require("./0007ReverseInteger.js");

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

test("esimerkki 1: 123 -> 321", () => {
  assert.strictEqual(reverse(123), 321);
});

test("esimerkki 2: -123 -> -321", () => {
  assert.strictEqual(reverse(-123), -321);
});

test("esimerkki 3: 120 -> 21", () => {
  assert.strictEqual(reverse(120), 21);
});

test("nolla pysyy nollana", () => {
  assert.strictEqual(reverse(0), 0);
});

test("yksinumeroinen luku pysyy samana", () => {
  assert.strictEqual(reverse(5), 5);
});

test("negatiivinen yksinumeroinen luku pysyy samana", () => {
  assert.strictEqual(reverse(-5), -5);
});

test("luku joka päättyy nollaan useasti: 1000000 -> 1", () => {
  assert.strictEqual(reverse(1000000), 1);
});

test("ylivuoto positiiviseen suuntaan palauttaa 0 (2147483647 -> 7463847412)", () => {
  assert.strictEqual(reverse(2147483647), 0);
});

test("ylivuoto negatiiviseen suuntaan palauttaa 0 (-2147483648 -> -8463847412)", () => {
  assert.strictEqual(reverse(-2147483648), 0);
});

test("juuri 32-bittisen rajan sisällä pysyvä luku käännetään oikein", () => {
  assert.strictEqual(reverse(1534236469), 0);
});

test("suurin sallittu positiivinen 32-bittinen arvo, joka mahtuu käännettynä", () => {
  assert.strictEqual(reverse(1463847412), 2147483641);
});

test("suurin sallittu negatiivinen 32-bittinen arvo, joka mahtuu käännettynä", () => {
  assert.strictEqual(reverse(-1463847412), -2147483641);
});

test("käännettynä juuri ylivuotoon menevä luku palauttaa 0 (1563847412 -> 2147483651)", () => {
  assert.strictEqual(reverse(1563847412), 0);
});
