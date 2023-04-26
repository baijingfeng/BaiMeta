// 蒙提霍尔问题

/* 
游戏1.有三个盒子，一个盒子里有钻石，其它两个什么都没有。你先选了一个盒子，放在你的书包里。主持人把另外两个放在他的书包里。这时候问你，要不要用你的书包换主持人的书包？
分析：你的书包只有一个盒子，主持人的书包有两个，很显然，主持人的书包里有钻石的可能性更大。所以应该选择换！

游戏2.有三个盒子，一个盒子里有钻石，其它两个什么都没有。你先选了一个盒子，放在你的书包里。主持人把另外两个放在他的书包里。然后主持人从他的书包里扔掉一个没有钻石的盒子。这时候问你，要不要用你的书包换主持人的书包？
分析：主持人从他的书包里扔掉一个没有钻石的盒子，这个行为并不会改变书包里有钻石的概率。所以既然游戏1要换，那么游戏2同样要换。

游戏3.有三个盒子，一个盒子里有钻石，其它两个什么都没有。你先选了一个盒子。然后主持人从另外两个盒子中扔掉一个没有钻石的盒子。这时候问你，要不要用你的盒子换剩下的那个盒子？
分析：游戏2相对于游戏3，唯一的不同是增加了“书包”这个概念，但其实有没有把盒子装入书包，并不会对结论产生影响，本质上游戏3和游戏2是同一个游戏。所以游戏3同样要换。

而游戏3就是题目中所描述的蒙提霍尔问题。因此结论只有一个字：换。

 */
// 伪随机数产生代码
const rand = (function () {
  var today = new Date()
  var seed = today.getTime()
  function rnd() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280.0
  }
  return function rand(number) {
    // return Math.ceil(rnd(seed) * number);
    return Math.ceil(rnd() * number)
  }
})()

// 三门问题
const N = 3
const change = true

const Total = 1000000
let count = 0
for (let i = 1; i <= Total; i++) {
  let lefted = 0
  const car = rand(N)
  const first_choose = rand(N)
  let last_choose = 0

  // 主持人随机打开一扇不是汽车的门后，留下一扇门
  // if (first_choose === car) {
  // 	lefted  = rand(N-1) // 选中一个随机数
  // 如果这个随机数等于car的位置，那么选择car紧跟之后的
  //	if (lefted === car) {
  //		lefted = car + 1
  //}

  //} else {
  //	lefted = car
  //}

  // 打开N-2个没有汽车的门
  if (first_choose === car) {
    lefted = ((car + 1) % N) + 1
  } else {
    lefted = car
  }

  if (change) {
    last_choose = lefted
  } else {
    last_choose = first_choose
  }
  count = count + (last_choose === car)
}

const str = ['不', '换']
console.log(rand(3))
console.log('换不换?\t%s:\t正确率:%f\n', str[+change], count / Total)
