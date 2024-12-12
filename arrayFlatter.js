
let arr = [1, 2, 3, [5, 6, 7, [5, 3, 6], 8]];

function arrayFlatter(arr) {
  let flattedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    if (Array.isArray(currentVal)) {
      flattedArr = flattedArr.concat(arrayFlatter(currentVal));
    } else {
      flattedArr.push(currentVal);
    }
  }
  return flattedArr;
}

let res = arrayFlatter(arr);
console.log(res);
