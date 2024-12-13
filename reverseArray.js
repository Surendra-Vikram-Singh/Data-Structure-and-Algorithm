let arr = [10, 2, 3, 9, 5, 6, 7, 8];

function reverseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[j];
      arr[j] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
    }
  }
  return arr;
}

let res = reverseArray(arr);
console.log(res);
