let arr = [1, 2, 3, 4, 5];

let test = arr.filter((item, index, arr) => {
  return item > 3
})

console.log(test)

// 查找相同字符内容
// let arrs = ['apple', 'banana', 'pineapple'];

// const ceshi = (query) => {
//   return arrs.filter(item =>
//     item.indexOf(query) > -1
//   )
// }

// console.log(ceshi('le'))

let names = ['apple', 'banaba']

let ceshi = (query) => {
  return names.filter(item =>
    item.indexOf(query) > -1
  )
}

console.log(ceshi('le'))