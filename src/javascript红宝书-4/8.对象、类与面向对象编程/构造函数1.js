var Person = function (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  }
}

var p1 = new Person('111', 10)

console.log(p1.getName())
console.log(p1.getAge())