let a = [1, 2, 3];
let b = [{
  name: "mingren", age: 11
}]

a.forEach(item => {
  console.log('--', item)
  item++
})

b.forEach(item => {
  item.age++
})

console.log(a, b);

[1, 2, 3].forEach(
  item => console.log(item)
)