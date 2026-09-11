/**
 * @param {number} x
 * @return {number}
 * https://leetcode.com/problems/reverse-integer/description/
 * Assume the environment does not
 * allow you to store 64-bit integers
 * (signed or unsigned).
 *
 * Tämä oli suoraan mallivastauksesta.
 * Katsoin vinkkiä ja paljastui jo koko vastaus.
 *
 * Mutta tuo MAX/10 oli se avain
 * jonka olisin tarvinnut omaan ratkaisuun.
 *
 * Ratkaisin ensin ilman tuota ylivuoto-oletusta ja
 * LeetCoden keskusteluiden perusteella moni muu ei
 * tajunnut edes ottaa huomioon sitä.
 */
var reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = (x - pop) / 10;
    if (
      // 214748364.7
      rev > Math.pow(2, 31) / 10 ||
      (rev == Math.pow(2, 31) / 10 && pop > 7)
    )
      return 0;
    if (
      //-214748364.8
      rev < Math.pow(-2, 31) / 10 ||
      (rev == Math.pow(-2, 31) / 10 && pop < -8)
    )
      return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};

module.exports = reverse;
