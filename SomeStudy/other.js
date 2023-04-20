const testArr = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
]
const selfArrayFlat = startArr => {
  let resultArr = []
  // 提取出最外层数组，字面量元素放在新数组里，数组元素用递归
  const arrayFlat = arr => {
    for (let i = 0; i < arr.length; i++) {
      const target = arr[i]
      if (Array.isArray(target)) {
        arrayFlat(target)
      } else {
        resultArr.push(target)
      }
    }

    return resultArr
  }
  return arrayFlat(startArr)
}

const selfArrayFlat2 = (arr, depth = 1) => {
  // 类型检查，参数正确性检查
  if (!Array.isArray(arr)) {
    throw new TypeError('参数并非数组类型，请传入一个数组')
  }

  if (!Number.isInteger(depth) || depth < 0) {
    return arr
  }

  // 循环遍历原数组，将原数组的元素逐个添加到新数组，如果元素类型是数组类型，递归本函数
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 递归
      resultArr = [...resultArr, ...selfArrayFlat2(arr[i], depth - 1)]
      // resultArr.concat()
    } else {
      resultArr.push(arr[i])
    }
  }
  return resultArr
}

// selfArrayFlat(testArr)
// console.log(
//   '%c Line:25 🥔 selfArrayFlat(testArr)',
//   'font-size:18px;color:#2eafb0;background:#fca650',
//   selfArrayFlat(testArr)
// )

// selfArrayFlat2(testArr)
console.log(
  '%c Line:66 🌮 selfArrayFlat2(testArr)',
  'font-size:18px;color:#465975;background:#3f7cff',
  selfArrayFlat2(testArr, 1)
)
