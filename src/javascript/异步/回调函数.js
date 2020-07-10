function a() {
  console.log('--- start a')
  setTimeout(() => {
    console.log('--- start a 2')

  }, 1000)
}

function b() {
  console.log('--- start b')

}

a();
b();