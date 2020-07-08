var value = [1, 2, 3, 4, 5]
// var n = 0;

// for (i = 1; i < 5; i++) {
//     value.push(i)
// }

// reduce
var sum = value.reduce((prev, cur, index, array) => {
    console.log('-----11', index, prev, cur, array)

    return prev + cur;
}, 0)

// for
// for (let i = 0; i < value.length; i++) {
//     n += value[i]
// }

function test() {

}

console.log('-------------', sum, value.length)