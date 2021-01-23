const promise = new Promise(function (resolve, reject) {
  console.log('promise resolved')

  setTimeout(function () {
    resolve();
  }, 1000)
})

promise.then(function(){
  console.log('11111')
})