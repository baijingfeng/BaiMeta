// 工具函数-交换数组两值
export const swapFunc = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 验证算法-对数器
// 生成足够多的随机样本，和系统正确算法结果做对比，判断程序的正确性
export const isRightFunc = myFunc => {
  // 工具函数-生成概率相等范围在[n, m]的随机整数
  for (let i = 0; i < 100; i++) {
    let arr = generateRandomArr(1000)
    let arr2 = [...arr]
    // 系统正确算法结果做对比
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

const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swapFunc(arr, i, minIndex)
  }
  return arr
}

// module.exports = {
//   swapFunc,
//   isRightFunc,
// }