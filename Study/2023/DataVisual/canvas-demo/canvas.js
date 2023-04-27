const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// 定义起点
ctx.beginPath()
ctx.lineWidth = 10
ctx.strokeStyle = 'orange'

// 绘制坐标点
ctx.moveTo(100, 100)
ctx.lineTo(300, 300)
ctx.lineTo(500, 200)
// 填充颜色
ctx.stroke()

// 定义终点
ctx.closePath()
