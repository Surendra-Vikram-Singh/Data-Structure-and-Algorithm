let arr = [1, 2, 2, 3, 3, 3, 5, 5, 5, 6, 6, 7, 8];

function duplicateElement(arr) {
  let dupsEle = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        dupsEle.push(arr[i]);
      }
    }
  }
  return dupsEle;
}

let res = duplicateElement(arr);

console.log(res);
