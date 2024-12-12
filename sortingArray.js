let arr = [1, 5, 2, 3, 5, 6, 7, 5, 3, 6, 8];

function sortingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let res = sortingArray(arr);
console.log(res);
