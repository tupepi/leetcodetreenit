const assert = require("assert");
const isPalindrome = require("./0009PalindromeNumber.js");

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

test("esimerkki 1: 121 -> true", () => {
  assert.strictEqual(isPalindrome(121), true);
});

test("esimerkki 2: -121 -> false", () => {
  assert.strictEqual(isPalindrome(-121), false);
});

test("esimerkki 3: 10 -> false", () => {
  assert.strictEqual(isPalindrome(10), false);
});

test("nolla on palindromi: 0 -> true", () => {
  assert.strictEqual(isPalindrome(0), true);
});

test("yksinumeroinen luku on aina palindromi: 7 -> true", () => {
  assert.strictEqual(isPalindrome(7), true);
});

test("parillinen palindromi: 1221 -> true", () => {
  assert.strictEqual(isPalindrome(1221), true);
});

test("pariton palindromi: 12321 -> true", () => {
  assert.strictEqual(isPalindrome(12321), true);
});

test("ei-palindromi useammalla numerolla: 123 -> false", () => {
  assert.strictEqual(isPalindrome(123), false);
});

test("negatiivinen palindromimuotoinen luku: -1 -> false", () => {
  assert.strictEqual(isPalindrome(-1), false);
});

test("luku joka päättyy nollaan ei ole palindromi: 100 -> false", () => {
  assert.strictEqual(isPalindrome(100), false);
});

test("suuri palindromi: 1234321 -> true", () => {
  assert.strictEqual(isPalindrome(1234321), true);
});

test("32-bittisen kokonaisluvun ylärajalla: 2147483647 -> false", () => {
  assert.strictEqual(isPalindrome(2147483647), false);
});

test("32-bittisen kokonaisluvun alarajalla: -2147483648 -> false", () => {
  assert.strictEqual(isPalindrome(-2147483648), false);
});
