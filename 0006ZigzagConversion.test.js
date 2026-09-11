const assert = require("assert");
const convert = require("./0006ZigzagConversion.js");

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

test("esimerkki 1: PAYPALISHIRING, 3 riviä -> PAHNAPLSIIGYIR", () => {
  assert.strictEqual(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
});

test("esimerkki 2: PAYPALISHIRING, 4 riviä -> PINALSIGYAHRPI", () => {
  assert.strictEqual(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
});

test("esimerkki 3: yhden merkin merkkijono, 1 rivi -> A", () => {
  assert.strictEqual(convert("A", 1), "A");
});

test("numRows on 1: merkkijono palautuu muuttumattomana", () => {
  assert.strictEqual(convert("HELLOWORLD", 1), "HELLOWORLD");
});

test("numRows >= merkkijonon pituus: merkkijono palautuu muuttumattomana", () => {
  assert.strictEqual(convert("AB", 5), "AB");
});

test("numRows on tasan merkkijonon pituus", () => {
  assert.strictEqual(convert("ABCD", 4), "ABCD");
});

test("kaksi riviä: AB -> AB", () => {
  assert.strictEqual(convert("AB", 2), "AB");
});

test("kaksi riviä pidemmällä merkkijonolla: ABCDE -> ACEBD", () => {
  assert.strictEqual(convert("ABCDE", 2), "ACEBD");
});

test("pilkkuja ja pisteitä sisältävä merkkijono", () => {
  assert.strictEqual(convert("A,B.C,D", 2), "ABCD,.,");
});

// Riippumaton kaava rivien sisällön laskemiseen, jotta pitkän
// syötteen odotettua tulosta ei tarvitse kirjoittaa käsin.
function buildExpectedZigzag(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill("");
  const cycleLen = 2 * numRows - 2;

  for (let row = 0; row < numRows; row++) {
    for (let start = row; start < s.length; start += cycleLen) {
      rows[row] += s[start];
      if (row > 0 && row < numRows - 1) {
        const mirror = start + cycleLen - 2 * row;
        if (mirror < s.length) rows[row] += s[mirror];
      }
    }
  }

  return rows.join("");
}

test("todella pitkä merkkijono (1000 merkkiä, 13 riviä)", () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let long = "";
  for (let i = 0; i < 1000; i++) {
    long += alphabet[i % alphabet.length];
  }

  const numRows = 13;
  const expected = buildExpectedZigzag(long, numRows);
  const result = convert(long, numRows);

  assert.strictEqual(result.length, long.length);
  assert.strictEqual(result, expected);
});
