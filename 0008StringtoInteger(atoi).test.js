const assert = require("assert");
const myAtoi = require("./0008StringtoInteger(atoi).js");

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

test('esimerkki 1: "42" -> 42', () => {
  assert.strictEqual(myAtoi("42"), 42);
});

test('esimerkki 2: "   -042" -> -42', () => {
  assert.strictEqual(myAtoi("   -042"), -42);
});

test('esimerkki 3: "1337c0d3" -> 1337', () => {
  assert.strictEqual(myAtoi("1337c0d3"), 1337);
});

test('esimerkki 4: "0-1" -> 0', () => {
  assert.strictEqual(myAtoi("0-1"), 0);
});

test('esimerkki 5: "words and 987" -> 0', () => {
  assert.strictEqual(myAtoi("words and 987"), 0);
});

test('tyhjä merkkijono -> 0', () => {
  assert.strictEqual(myAtoi(""), 0);
});

test('pelkkää välilyöntiä -> 0', () => {
  assert.strictEqual(myAtoi("   "), 0);
});

test('plus-merkki tunnistetaan: "+1" -> 1', () => {
  assert.strictEqual(myAtoi("+1"), 1);
});

test('pelkkä merkki ilman numeroita -> 0', () => {
  assert.strictEqual(myAtoi("+-12"), 0);
});

test('johtavat nollat jätetään pois: "0032" -> 32', () => {
  assert.strictEqual(myAtoi("0032"), 32);
});

test('ylivuoto positiiviseen suuntaan rajataan 2^31 - 1: "91283472332" -> 2147483647', () => {
  assert.strictEqual(myAtoi("91283472332"), 2147483647);
});

test('ylivuoto negatiiviseen suuntaan rajataan -2^31: "-91283472332" -> -2147483648', () => {
  assert.strictEqual(myAtoi("-91283472332"), -2147483648);
});

test('juuri 2^31 - 1 pysyy samana', () => {
  assert.strictEqual(myAtoi("2147483647"), 2147483647);
});

test('juuri -2^31 pysyy samana', () => {
  assert.strictEqual(myAtoi("-2147483648"), -2147483648);
});

test('yksi yli ylärajan pyöristetään: "2147483648" -> 2147483647', () => {
  assert.strictEqual(myAtoi("2147483648"), 2147483647);
});

test('yksi yli alarajan pyöristetään: "-2147483649" -> -2147483648', () => {
  assert.strictEqual(myAtoi("-2147483649"), -2147483648);
});

test('desimaalipiste katkaisee luvun: "3.14159" -> 3', () => {
  assert.strictEqual(myAtoi("3.14159"), 3);
});

test('välilyönti keskellä lopettaa luvun luvun: "42 with words" -> 42', () => {
  assert.strictEqual(myAtoi("42 with words"), 42);
});
