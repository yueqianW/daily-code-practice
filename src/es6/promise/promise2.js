const callbacks = function () {
  console.log('callback');
}

function dynamicFun(cb) {
  setTimeout(cb, 1000)
}
dynamicFun(callbacks)

function dynamicFunAsync() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })
}

dynamicFunAsync().then(callbacks)