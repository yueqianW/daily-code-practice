// let a = function () {
//   return 1;
// }

// let b = a;
// delete a;
// // b();
// console.log(a(), b())

function test(name) {
  this.name = name;
}

let t = test('666')
console.log(t)
console.log(name)