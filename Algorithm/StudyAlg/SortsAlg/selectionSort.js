// 工具函数-交换数组两值
const swapFunc = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * 选择排序, 依次选择最小数交换
 * 优化思路：
 * 1. 寻找最小值时候同时寻找最大值，减少一半循环时间
 * 2. 寻找最小值时候同时比较多个值，减少后续循环比较次数
 */
const testArr = [5, 3, 6, 8, 9, 4, 2]

function selectionSort(arr) {
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

// 验证算法-对数器
// 生成足够多的随机样本，和系统正确算法结果做对比，判断程序的正确性
const isRightFunc = myFunc => {
  // 工具函数-生成概率相等范围在[n, m]的随机整数
  for (let i = 0; i < 100; i++) {
    let arr = generateRandomArr(1000)
    let arr2 = [...arr]
    // 系统正确算法结果做对比, 标准函数与目标函数
    const resultArr = selectionSort(arr)
    const resultArr2 = myFunc(arr2)
    // 判断程序的正确性
    for (let i = 0; i < arr.length; i++) {
      if (resultArr[i] !== resultArr2[i]) {
        return false
      }
    }
  }
  return true
}

const getRandomIntNumber = (n, m) => {
  return parseInt(Math.random() * (m - n + 1) + n)
}
// 生成随机样本
const generateRandomArr = n => {
  let arr = []
  let arrLength = getRandomIntNumber(1, n)
  for (let i = 0; i < arrLength; i++) {
    arr[i] = getRandomIntNumber(0, n)
  }
  return arr
}
console.log(
  '%c Line:66 🍣 isRightFunc(selectionSort)',
  'font-size:18px;color:#ea7e5c;background:#42b983',
  isRightFunc(selectionSort)
)
