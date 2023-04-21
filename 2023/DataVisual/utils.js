// 获取随机16进制， 可用于给定随机颜色
const getRandomColor = () => {
  return parseInt(Math.random() * 0xffffff).toString(16)
}

getRandomColor()
console.log(
  '%c Line:6 🧀 getRandomColor()',
  'font-size:18px;color:#33a5ff;background:#465975',
  getRandomColor()
)
