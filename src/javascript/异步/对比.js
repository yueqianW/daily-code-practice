let fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

fs.readFile('./a.txt', function (err, data) {
  fs.readFile(data, function (err, item) {
    fs.readFile(item, function (err, res) {
      console.log(res)
    })
  })
})


function read(url) {
  return new Promise((res, rej) => {
    fs.readFile(url, function (err, data) {
      err && reject(err);
      resolve(data)
    })
  })
}

read('./a.txt').then(data => {
  return read(data)
}).then(data => {
  return read(data);
}).then(data => {
  console.log(data)
})
