var arr = [{ a: 1, b: 10 }, { a: 2, b: 10 },
{ a: 3, b: 10 }, { a: 1, b: 10 }, { a: 2, b: 10 }, { a: 4, b: 10 }];

function arrayCnt(arr) {
  var newArr = [];
  //使用set进行数组去重
  newArr = [...new Set(arr)];
  var newarr2 = new Array(newArr.length);
  for (var t = 0; t < newarr2.length; t++) {
    newarr2[t] = 0;
  }
  for (var p = 0; p < newArr.length; p++) {
    for (var j = 0; j < arr.length; j++) {
      if (newArr[p].a == arr[j].a) {
        newarr2[p]++;
      }
    }

  }
  for (var m = 0; m < newArr.length; m++) {
    console.log(newArr[m] + "重复的次数为：" + newarr2[m]);
  }
}
arrayCnt(arr);