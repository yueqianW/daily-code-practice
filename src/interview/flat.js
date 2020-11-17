let a = [0, 1, 2, [3, 4, [5, 6]]]

// console.log(a.flat(2), a)

// 数组打平

function reFlat(list) {
  if (!Array.isArray(list)) {
    return;
  }
  return list.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? reFlat(cur) : cur)
  }, [])
}

console.log(reFlat(a))
