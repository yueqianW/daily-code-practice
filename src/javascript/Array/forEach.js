let a = [1, 2, 3];

a.forEach((item, index, arr) => {
  item = item + 1
  console.log(item);
  return item

})


console.log(a);

[1, 2, 3].forEach(item => {
  item++;
  console.log(item)
}
)