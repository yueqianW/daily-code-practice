let foo = {}
let F = function(){}

Object.prototype.a = '111';
Function.prototype.b = '222'

console.log(foo.a)
console.log(foo.b)
console.log(F.a)
console.log(F.b)