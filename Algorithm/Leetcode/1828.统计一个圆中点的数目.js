/*
 * @lc app=leetcode.cn id=1828 lang=javascript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  return queries.map(itemArr => {
    const [x, y, r] = itemArr;
    let result = 0;
    for (let arr of points) {
      const [a, b] = arr;
      const space = (a - x) ** 2 + (b - y) ** 2;
      if (space <= r ** 2) {
        result++;
      }
    }

    return result;
  });
};
// @lc code=end
