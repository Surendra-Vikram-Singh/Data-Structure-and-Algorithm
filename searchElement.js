const arr = [1, 2, 3, 4, 6, 7, 8];

function searhElement(arr, element) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (element == arr[i]) index = i;
  }
  return index;
}

let res = searhElement(arr, 3);
console.log(res);
