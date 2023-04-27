# 根据年月日计算星期几办法
# 蔡勒公式，适用于格里高历法（1582.10.15及之后）和 儒略历（1582.10.4及之前）
def zeller(y, m, d):
  Y = y
  M = m
  D = d
  if m < 3:
    m += 12
    y += 1

  a = y // 100
  b = y % 100
    
  if y <= 1582 and m <= 10 and d <= 4:
    h = (5 * a + a // 4 + b + b // 4 + (26 * (m + 1)) // 10 + d + 2)%7
  elif y == 1582 and m == 10 and d > 4 and d < 15:
    print("格里高历法和儒略历中不存在1582年10月5日-1582年10月14日,详情请参照百科全书知识")
    return None
  else: 
    h = (5 * a + a // 4 + b + b // 4 + (26 * (m + 1)) // 10 + d + 6)%7

  switch_dict = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
  }
  print(f"{Y}年{M}月{D}日是，星期{switch_dict.get(h)}")
  return h

zeller(2023, 3, 17)
zeller(1993, 9, 19)
zeller(1993, 11, 2)

zeller(1,1,1)

zeller(1949,10,1)
zeller(2023,11,17)
# zeller(1582,10,1)
# zeller(1582,10,10)
# zeller(1582,10,14)
# zeller(1582,10,4)