let book = {
  year_: 2017,
  edtion: 1,
}

Object.defineProperty(book, 'year', {
  get() {
    return this.year_;
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edtion += newValue - 2017;
    }
  }
})

book.year = 2019;
console.log(book.edtion)