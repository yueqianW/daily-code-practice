var value = []
var n = 0;

for (i = 1; i < 11; i++) {
    value.push(i)
}

// reduce
var sum = value.reduce((prev, cur, index, array) => {
    return prev + cur;
}, 5)

// for
for (let i = 0; i < value.length; i++) {
    n += value[i]
}

console.log('-------------', sum)