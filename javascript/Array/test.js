let obj1 = {
    1:1,
    2:2
}

let arr = new Array(2)
arr[0] = obj1

// console.log('------ arr', arr)

// let [o,b] = arr
// console.log('------ o b', o, b)

let a = 1,b = 2,c=arr[1];

let d = a + c || a + b

console.log('-------',d,c)
