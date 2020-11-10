let person = {};

Object.defineProperty(person, 'name', {
  // configurable: false,
  writable: false,
  value: '111'
})
console.log(person.name)
// delete person.name
person.name = '222'

console.log(person.name)

Object.defineProperty(person, 'name', {
  writable: true,
  value: '111'
})

console.log(person.name)
// delete person.name
person.name = '222'

console.log(person.name)


