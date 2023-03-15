/**
 * 冒泡排序，找出相对大数，不断交换位置，放到最后
 */
import { swapFunc, isRightFunc } from '../tools/basic.js'

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) swapFunc(arr, j, j + 1)
    }
  }
  return arr
}
// const testArr = [6, 4, 8, 9, 3, 1, 7, 5, 2]
// console.log(
//   '%c Line:20 🍏 bubbleSort(testArr)',
//   'font-size:18px;color:#4fff4B;background:#b03734',
//   bubbleSort(testArr)
// )

console.log(
  '%c Line:35 🧀 isRightFunc(bubbleSort)',
  'font-size:18px;color:#f5ce50;background:#33a5ff',
  isRightFunc(bubbleSort)
)
