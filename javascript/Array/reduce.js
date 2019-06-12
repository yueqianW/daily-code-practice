var value = []
var n = 0;

for(i=1;i<1000001;i++){
    value.push(i)
}

console.time('reduce')
var sum = value.reduce((prev, cur, index, array) => {
    return prev + cur;
})
console.timeEnd('reduce')

console.time('for')
for (let i = 0; i < value.length; i++) {
    n += value[i]
}
console.timeEnd('for')

console.log('-------------', sum, n)