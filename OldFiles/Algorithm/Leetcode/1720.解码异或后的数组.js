/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  return encoded.reduce((acc, curr, index) => [...acc, acc[index] ^ curr], [first]);
};
// @lc code=end
