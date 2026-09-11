/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * https://leetcode.com/problems/zigzag-conversion/description/
 * Runtime 4 ms Beats 75.27% Memory 56.54 MB Beats86.92%
 *
 * Aluksi ratkaisu oli muuten sama, mutta hitaampi.
 *
 * Lopulta tajusin, että lopputaulukko voidaan alustaa
 * oikean kokoiseksi heti alusta, jatkuvan pushaamisen sijaan.
 *
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let output = new Array(s.length);
  let oi = 0;
  let first = true;
  for (let r = 0; r < numRows; r++) {
    let i = r;
    first = true;
    while (i < s.length) {
      output[oi++] = s[i];
      if (r < numRows - 1 && (r === 0 || first)) {
        i += 2 * (numRows - 1 - r);
      } else {
        i += 2 * r;
      }
      first = !first;
    }
  }
  return output.join("");
};
module.exports = convert;
