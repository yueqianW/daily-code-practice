let rows = [{
  a: "111",
  b: [{
    a: '1',
  }, {
    a: '2',
  },]
},{
  a: "222",
  b: [{
    a: '3',
  }, {
    a: '4',
  },]
}]

let arr =[]
let childArr =[]
for(let item of rows) {
  arr.push(item.a)
  let test = item.a

  if(item.b.length>0){
    let arr1 = []
    for(let child of item.b) {
      arr1.push(child.a)

    }
    let obj = {};
    obj[test] = arr1
    childArr.push(obj)
  }
}

console.log(arr, childArr)