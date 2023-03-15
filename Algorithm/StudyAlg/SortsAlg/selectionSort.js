/**
 * 选择排序, 遍历选出最小数。交换到最前边
 * 优化思路：
 * 1. 寻找最小值时候同时寻找最大值，减少一半循环时间
 * 2. 寻找最小值时候同时比较多个值，减少后续循环比较次数
 */
import { swapFunc, isRightFunc } from '../tools/basic.js'
const testArr = [5, 3, 6, 8, 9, 4, 2]

const selectionSort = arr => {
  // console.log('%c Line:7 🍎 arr', 'font-size:18px;color:#4fff4B;background:#b03734', arr)
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swapFunc(arr, i, minIndex)
    // console.log('%c Line:19 🍿 arr', 'font-size:18px;color:#ffdd4d;background:#f5ce50', arr)
  }
  // console.log('%c Line:21 🥑 arr', 'font-size:18px;color:#f5ce50;background:#4fff4B', arr)

  return arr
}

console.log(
  '%c Line:66 🍣 isRightFunc(selectionSort)',
  'font-size:18px;color:#ea7e5c;background:#42b983',
  isRightFunc(selectionSort)
)
