/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/string-to-integer-atoi/
 * Runtime 1 ms Beats 87.75% Memory 57.14 MB Beats 57.34%
 *  if-elsettely tuntuu sätökseltä...
 * Edellinen tehtävä 0007 meni mallivastauksella,
 * nyt pääsin itse hyödyntämään samaa logiikkaa ylivuodon varalle.
 *
 */
var myAtoi = function (s) {
  if (s.length === 0) return 0;
  let s_trimmed = s.trimStart();
  let sign = 1;
  let l = 0;
  if (s_trimmed[0] === "-") {
    sign = -1;
    l = 1;
  }
  if (s_trimmed[0] === "+") {
    sign = 1;
    l = 1;
  }
  let tenthOfMax = Math.floor((Math.pow(2, 31) - 1) / 10);
  let tenthOfMin = -Math.floor(Math.pow(2, 31) / 10);
  let prevx = 0;
  for (let i = l; i < s_trimmed.length; i++) {
    let pop = parseInt(s_trimmed[i]);
    if (isNaN(pop)) break;

    if (
      sign === 1 &&
      (prevx > tenthOfMax || (prevx == tenthOfMax && pop > 7))
    ) {
      return Math.pow(2, 31) - 1;
    } else if (
      sign * prevx < tenthOfMin ||
      (sign * prevx == tenthOfMin && sign * pop < -8)
    ) {
      return Math.pow(-2, 31);
    }

    prevx = prevx * 10 + pop;
  }
  return prevx * sign;
};

module.exports = myAtoi;
