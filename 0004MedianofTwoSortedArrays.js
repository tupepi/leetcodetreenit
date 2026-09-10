/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * "The overall run time complexity should be O(log (m+n))."
 *
 * Toistaiseksi O(n+m)
 *
 * Parittomalla määrällä yksi turha silmukan kierros.
 *
 * Ainut järkevä mihin itse päädyin oli käydä järjestyksessä
 * alusta puoleen väliin asti molempia ottaen aina pienempi.
 *
 * Yritin miettiä jotain "matemaattisempaa",
 * jolla saattaisi saada lähes ilman läpikäyntejä,
 * mutta en keksinyt mitään.
 *
 * Sitten tarkistin alkua LeetCoden mallialgoritmista ja toteutin lopulta alla olevasti.
 *
 * 1 ms Beats 99.02% Memory 58.48MB Beats 63.47%
 *
 * Aluksi tulos oli vähän huonompi
 * kun keräsin läpikäytyjä uuteen taulukkoon.
 * Sitten vaihdoin alla olevasti eli pidetään kirjaa vain
 * kahdesta viimeisestä.
 *
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n1l = nums1.length;
  const n2l = nums2.length;
  if (n1l === 0) {
    return findMedianSortedArray(nums2);
  } else if (n2l === 0) {
    return findMedianSortedArray(nums1);
  }
  const length = n1l + n2l;
  let n1i = 0;
  let n2i = 0;
  let prev = null;
  let added = null;
  for (let i = 0; i < length / 2 + 1; i++) {
    if ((n1i < n1l && n2i < n2l && nums1[n1i] < nums2[n2i]) || n2i >= n2l) {
      prev = added;
      added = nums1[n1i];
      n1i++;
    } else {
      prev = added;
      added = nums2[n2i];
      n2i++;
    }
  }

  if (length % 2 === 0) {
    return (prev + added) / 2;
  }
  return prev;
};

var findMedianSortedArray = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  }
  const a = nums[nums.length / 2 - 1];
  const b = nums[nums.length / 2];
  return (a + b) / 2;
};

module.exports = findMedianSortedArrays;
