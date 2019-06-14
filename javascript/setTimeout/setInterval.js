let num = 0,
    total = 0,
    show = 0,
    use = 0;

setInterval(() => {
    total += 5
    show = (total - num) / 5
    use += show;
}, 5000)


function test() {
    console.log('-----', use)
}

setInterval(() => {
    test()
}, 1000)