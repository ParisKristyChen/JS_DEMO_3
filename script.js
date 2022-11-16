{ document.querySelector('input')
document.querySelector('span')
// query询问，span#add2 同级ID不能断开写，（）里面的有空格代表下一层 querySelector 用得多，万能

console.log(document.querySelector('span#add2'));

const span = document.querySelector('span#add2')
const spanList = document.querySelectorAll('span')
console.log(spanList);

//for循环创造一个变量，i小于变量的长度
for (let i = 0; i < spanList.length; i++) {
  console.log(spanList[i]);
}

spanList.forEach(el => {
 console.log(el);
})

//ById不需要写#，只拿一个。 ClassName不需要加.
const add2 = document.getElementById('add2')
const sub = document.getElementsByClassName('sub')

console.log(add2);
console.log(sub);
}

{
  console.clear();

  const span = document.querySelector('span')
  const list = []
  let num = 0
  let num2 = 100

  //addEventListener两者独立，适合只想添加功能；onclick后者覆盖前者，只能最后一项存在
  span.addEventListener('click', () => {
    console.log(++num);
    let input = document.querySelector('input').value
    const inputDom = document.querySelector('input')
    console.log(input);

// 节点的值变成空，每次点span后可以清空。inputDom是引用，input前面加+号变数字 sort分类
    inputDom.value = ''
    list.push(+input)
    //console.log(list);
    const sortList = sort(list)
    console.log(sortList);


    //innerHTML tbody里面的内容添加新数字前清空重复的数字 query询问 append附加
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    sortList.forEach((el, index) => {
      console.log(`Element: ${el}, Index: ${index}`);
    })
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = index + 1
    const td = document.createElement('td')
    td.textContent = el
    tbody.append(tr)
    tr.append(th, td)
    
  })


  {// span.addEventListener('click', () => {
  //   console.log(--num2);
  // })

  // span.onclick = function () {
  //   console.log(--num2);
  // }

  // span.onclick = function () {
  //   console.log(++num);
  // }
  }
}


//...rest 把函数无限伸长
// {draw()

// function draw() {
//   console.log("1,2,3 4");
// }

// draw()

// function draw2(list) {
//   console.log(list);
// }

// draw2([4, 5, 6])
// draw2([7, 8, 9])

// function draw3(list){
//   const newList = []
//   list.forEach(el => {
//   if(el === +el) {
//     newList.push(el)
//   }
//   })
//   return newList
// }

// const newList = draw3([1, 2, 34, 'a', 'c', 7, 8])
// console.log(newList);

// function sum(a, b) {
//   return a + b
// }
// console.log(sum(1, 2));


// function newSum(a, b, ...rest) {
//   let sum = a + b
//   rest.forEach(el => {
//     sum += el
//   })
//   return sum
// }

// console.log(newSum(1, 2, 4, 5));
// }

function draw2(list) {
  console.log(list);
}
function draw3(list) {
  const newList = []
  list.forEach(el => {
    newList.push(el)
  })
}


function isNumber(something) {
  return something === +something;//===返回的是boolean值
}

/**
 * 用来注释
 * @return 返回已经排好的序列
 * @function sort 这是一个list排序，可去重，可打碎
 */

function sort(list) {
  const flatList = list.flat(Infinity);
  const filterList = flatList.filter((element) => isNumber(element));
  const setList = [...new Set(filterList)]; //set唯一化处理，把重合的干掉
  const sortList = setList.sort((a, b) => a - b);//排序
  return sortList

function sort2(list) {
  return [...new Set(list.flat(Infinity).filter(element => isNumber(element)))].sort((a, b) => a - b)
}


  }



const roles = ['student', 'teacher', 'boss']
let role = roles[0]
if(role === 'stdent') {
  console.log('hello!');
} else if (role === 'teacher'){
  console.log('hi!');
} else if (role === 'boss'){
  console.log('??');
} else {
  console.log('...');
}

// 格式：switch(key) case value: 多的时候用这个结构
//break 防止上下串流，如果roles是一样的就不用break
switch (role) {
  case roles[0]:
    console.log('hello!');
   break;
  case roles[1]:
    console.log('hi!');
    break;
  case roles[2]:
    console.log('??');
      break;
  default:
    console.log('...');
    break;  
  }

  {
    let num = 0
    while (num < 9) {
      console.log(++num);
    }

    //九九乘法表 str string \n换行
    let str = ''

    for (let i = 1; i < 10; i++) {
      for (let j = 1; j <= i; j++) {
        str += `  ${i}*${j}=${i * j} `;
        if (i == j) {
          str += '\n'
        }
      }
    }

    console.log(str);
    console.clear();
  }


  //=>箭头函数后者覆盖前者，同名也不会错。需要在定义后使用。function传统函数前后都可以用,在return后再打印无效 object函数有3个变种形态
  {
    func()
    function func() {
      console.log('1');
    }
    func()

    const func2 = () => {
      console.log('2');
    }

    func2()

    let func3 = (list) => {
      console.log(list);
      return list
      //console.log(list);
    }
    
    name = "rui chen"
    const user = {
      name: "Kristy",
      age: 30,
      cycling2() {
        this.name
        console.log('cycling2', this.name);
      },
      cycling: function () {
        console.log('cycling1', this.name);
      },
      cycling3: () => {
        console.log('cycling3',this.name);  //箭头函数不能调用里面的内容,name写外面可以
      }
    }

    user.cycling()
    user.cycling2()
    user.cycling3()

    const raduis = 1
    const location = { x: 1, y: 2}
    const isVisible = true
    function draw() {
      console.log('draw');
    }

    const circle = {
      raduis: raduis,
      location: location,
      isVisible: isVisible,
      draw: draw
    }

    circle.draw()
//名字一致的keys不用写,可简写
    const circle2 = {
      raduis,
      location,
      isVisible,
      draw
    }
    circle2.draw()

  }
  

