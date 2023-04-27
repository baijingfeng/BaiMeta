// 区间覆盖问题，贪心算法
// 区间长度8，可选的覆盖线段[2,6],[1,4],[3,6],[3,7],[6,8],[2,4],[3,5]
// 假设第一步加入[1,4]，那么下一步能够选择的有[2,6]，[3,5]，[3,6]，[3,7]，由于7最大，所以下一步选择[3,7]，最后一步只能选择[6,8]，这个时候刚好达到了8退出，所选区间为3

const n = 8
const lines = [
  [2, 6],
  [1, 4],
  [3, 6],
  [3, 7],
  [6, 8],
  [2, 4],
  [3, 5],
]

const lines2 = [
  [1, 4],
  [2, 5],
  [3, 6],
]

const myFunc = lines => {
  lines.sort((a, b) => a[0] - b[0])
  console.log('%c Line:17 🍆 lines', 'font-size:18px;color:#ffdd4d;background:#6ec1c2', lines)

  let count = 0
  let rightIndex = -Infinity
  // let prevRight = rightIndex
  let tempArr = []
  let tempValue = 0

  for (let i = 0; i < lines.length; i++) {
    const [start, end] = lines[i]
    if (start <= rightIndex && end > rightIndex) {
      tempArr.push([start, end])
      tempValue = Math.max(tempValue, end)
    } else if (start > rightIndex) {
      count++
      tempArr = []
      rightIndex = tempValue
      tempValue = rightIndex
    }
  }
  return count + flag
}

// myFunc(lines)
console.log(
  '%c Line:36 🍐 myFunc(lines)',
  'font-size:18px;color:#ffdd4d;background:#4fff4B',
  myFunc(lines2)
)
