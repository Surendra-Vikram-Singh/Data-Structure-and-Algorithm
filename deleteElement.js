let arr = [1, 2, 3, 3, 5, 5, 5, 6, 6, 7, 8];

function deleteElement(arr, position) {
  for (let i = position; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

let res = deleteElement(arr, 0);

console.log(res);
