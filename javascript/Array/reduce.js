var value = []
var n = 0;

for (i = 1; i < 10001; i++) {
    value.push(i)
}

// reduce
var sum = value.reduce((prev, cur, index, array) => {
    return prev + cur;
})

// for
for (let i = 0; i < value.length; i++) {
    n += value[i]
}

console.log('-------------', sum, n)