let a = Symbol();
let b = Symbol();

let obj = {
  [a]: '111',
}
obj.b = '222'
console.log(typeof a);
console.log(obj[a]);
console.log(obj[b]);
