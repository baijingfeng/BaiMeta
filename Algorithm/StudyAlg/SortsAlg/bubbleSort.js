/**
 * 冒泡排序，找出相对大数，不断交换位置，放到最后
 */
import { swapFunc, isRightFunc } from '../tools/basic.js'
const testArr = [6, 4, 8, 9, 3, 1, 7, 5, 2]
function bubbleSort(arr) {
  let k = 0
  while (k < arr.length) {
    for (let i = 0; i < arr.length - k; i++) {
      if (arr[i] > arr[i + 1]) {
        swapFunc(arr, i, i + 1)
      }
    }
    k++
    // console.log('%c Line:7 🍋 arr', 'font-size:18px;color:#7f2b82;background:#ffdd4d', arr)
  }
  return arr
}

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
