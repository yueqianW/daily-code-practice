// var arr = [1,2,3]
var arr = [{name:'111'},{name:'222'}]


var arr1 = arr.concat()

var arr2 = [].concat(arr)

arr1[2] = 5
arr2[0].name = '000'
// arr1.push(4,5)

console.log('-----',arr)
console.log('-----',arr1)
console.log('-----',arr2)

