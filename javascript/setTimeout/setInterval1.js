
let n = 1;

function test() {
    console.log('------- n', n)
    n += 1;

    if (n > 5) {
        n = 1
    }
    
}

test()

setInterval(() => {
    console.log('------- use')
}, 5000)


setInterval(() => {
    test()
}, 1000)