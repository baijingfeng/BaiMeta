/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, n) {
  let resultStr = ''
  if (n < 2) return s
  const fixedNum = 2 * n - 2
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      for (let j = i; j < s.length; j += fixedNum) {
        resultStr += s[j]
      }
    } else {
      for (let k = i, h = fixedNum - i; k < s.length; k += fixedNum, h += fixedNum) {
        resultStr += s[k]
        if (h < s.length) {
          resultStr += s[h]
        }
      }
    }
  }

  return resultStr
}
// @lc code=end
