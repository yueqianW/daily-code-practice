let values = [1, 23, 4, 5, 6, 7, 8, 9, 0];
let iteration = Math.ceil(values.length / 8);
let startAt = values.length % 8;

let i = 0;

do {
  switch (startAt) {
    case 0:
      console.log('0');
    case 7:
      console.log('1');
    case 6:
      console.log('1');
    case 5:
      console.log('1');
    case 4:
      console.log('1');
    case 3:
      console.log('1');
    case 2:
      console.log('1');
    case 1:
      console.log('1');
  }
  startAt = 0;
} while (--iteration > 0)
