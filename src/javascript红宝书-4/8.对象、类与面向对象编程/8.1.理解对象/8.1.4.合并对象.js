let dest, src, result;

dest = {}

src = { name: '111' }

test = { age: 12, high: 180 }

result = Object.assign(dest, src, test)

console.log(dest, result)