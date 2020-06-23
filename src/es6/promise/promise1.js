let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('0000')
        reject('1111')
    }, 500)
})

p.then((data) => {
    console.log('---- 22', data)
    console.log('---- 22', es)
}, (err) => {
    console.log('---- err', err)

}).catch(err => {
    console.log('---- 444')
})