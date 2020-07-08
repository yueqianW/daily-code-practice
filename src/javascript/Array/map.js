let arr = [1, 2, 3, 4, 5]

let test = arr.map((item, index, arr) => {
    return item * 3
})
console.log(test)


let names = ['apple', 'banaba']

let ceshi = (query) => {
    return names.map(item =>
        item.indexOf(query) > -1
    )
}

console.log(ceshi('le'))