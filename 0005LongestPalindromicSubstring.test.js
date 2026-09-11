const assert = require("assert");
const longestPalindrome = require("./0005LongestPalindromicSubstring.js");

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

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function assertIsLongestPalindrome(s, result) {
  assert.ok(isPalindrome(result), `"${result}" ei ole palindromi`);
  assert.ok(s.includes(result), `"${result}" ei löydy merkkijonosta "${s}"`);

  for (let start = 0; start < s.length; start++) {
    for (let end = start + result.length + 1; end <= s.length; end++) {
      const candidate = s.slice(start, end);
      assert.ok(
        !isPalindrome(candidate),
        `löytyi pidempi palindromi "${candidate}", mutta tulos oli "${result}"`
      );
    }
  }
}

test("esimerkki 1: babad -> bab tai aba", () => {
  assertIsLongestPalindrome("babad", longestPalindrome("babad"));
});

test("esimerkki 2: cbbd -> bb", () => {
  assert.strictEqual(longestPalindrome("cbbd"), "bb");
});

test("yhden merkin merkkijono: a -> a", () => {
  assert.strictEqual(longestPalindrome("a"), "a");
});

test("koko merkkijono on palindromi: racecar -> racecar", () => {
  assert.strictEqual(longestPalindrome("racecar"), "racecar");
});

test("parillinen palindromi: abba -> abba", () => {
  assert.strictEqual(longestPalindrome("abba"), "abba");
});

test("ei palindromia yhtä merkkiä pidempää: abc -> yksi merkeistä", () => {
  const result = longestPalindrome("abc");
  assert.strictEqual(result.length, 1);
  assert.ok("abc".includes(result));
});

test("kaikki samoja merkkejä: aaaa -> aaaa", () => {
  assert.strictEqual(longestPalindrome("aaaa"), "aaaa");
});

test("palindromi merkkijonon lopussa: xyzcba... ei, testataan abaxyzzyx -> xyzzyx", () => {
  assertIsLongestPalindrome("abaxyzzyx", longestPalindrome("abaxyzzyx"));
});

test("numeroita sisältävä merkkijono: 12321 -> 12321", () => {
  assert.strictEqual(longestPalindrome("12321"), "12321");
});

test("kaksi yhtä pitkää palindromia, ensimmäinen kelpaa: aacabdkacaa", () => {
  assertIsLongestPalindrome("aacabdkacaa", longestPalindrome("aacabdkacaa"));
});
