/**
 * @param {string} s
 * @return {string}
 *
 * Katsoin malliapua algoritmin ideaan, jotta sain
 * O(n^3) -> O(n^2)
 *
 * Itselle tuli alempana oleva ratkaisu luonnostaan
 * ja toteutin sen melko nopeasti.
 *
 * Runtime 15 ms Beats 93.05% Memory 55.20 MB Beats 69.14%
 *
 *
 */
var longestPalindrome = function (s) {
  // Tiedetään että
  // 1 <= s.length <= 1000
  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    for (let k = 0; k <= 1; k++) {
      let l = i;
      let r = i + k;
      let newL = Number.MAX_SAFE_INTEGER;
      let newR = Number.MIN_SAFE_INTEGER;
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > longest.length) {
          newL = l;
          newR = r;
        }
        l--;
        r++;
      }
      longest =
        newR - newL + 1 > longest.length ? s.slice(newL, newR + 1) : longest;
    }
  }
  return longest;
};

/*
Nopeasti väsätty O(n^3) versio

var longestPalindrome = function (s) {
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      if (isPalindrome(s.slice(j, j + i))) {
        return s.slice(j, j + i);
      }
    }
  }

  return s;
};

var isPalindrome = function (s) {
  for (let i = 0; i < s.length - 1 - i; i++) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) return false;
  }
  return true;
};
 */

module.exports = longestPalindrome;
