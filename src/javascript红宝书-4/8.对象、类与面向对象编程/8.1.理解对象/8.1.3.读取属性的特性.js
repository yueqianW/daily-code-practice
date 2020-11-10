let book = {};

Object.defineProperties(book, {
  year_: {
    value: 2017
  },
  edition: {
    value: 1
  },
  year: {
    get() {
      return this.year_;
    },
    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017
      }
    }
  }
})

let des = Object.getOwnPropertyDescriptors(book)

console.log(des)

// let des = Object.getOwnPropertyDescriptor(book, 'year_')
// let des2 = Object.getOwnPropertyDescriptor(book, 'year')
// let des3 = Object.getOwnPropertyDescriptor(book, 'edition')
//
// console.log(des)
// console.log(des2)
// console.log(des3)
