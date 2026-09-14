/**
 * @param {number} x
 * @return {boolean}
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * Tein melko pitkään tätä vielä valmiiksi saamisen jälkeen,
 * alkuperäinen ratkaisu oli monimutkainen ja sisälsi paljon
 * kympillä kertomista ja jakamista ja pyöristysvirheitä.
 *
 * Lopulta ilmiselvän jakojäännöksen avulla pääsi paljon
 * kauniimpaan ratkaisuun. Kutakuinkin yhtä tehokas
 * oli myös alkuperäinen ratkaisu mutta ei yhtä luettava
 *
 * Runtime 7 ms Beats 54.40% Memory 64.53 MB Beats 38.86%
 *
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let y = 0;
  let l = x;
  while (l > 0) {
    y = y * 10 + (l % 10);
    l = Math.floor(l / 10);
  }
  return y === x;
};

module.exports = isPalindrome;
