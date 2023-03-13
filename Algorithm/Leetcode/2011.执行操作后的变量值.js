/*
 * @lc app=leetcode.cn id=2011 lang=javascript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let result = 0;
    for (let item of operations) {
        switch (item) {
            case "X++":
            case "++X":
                result++
                break;
            case "X--":
            case "--X":
                result--;
                break;
        }
    }

    return result;

};
// @lc code=end

