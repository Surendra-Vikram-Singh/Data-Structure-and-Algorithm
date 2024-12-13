let arr = [1, 2, 4, 5];

function findMissingNumber(arr, n) {
  let expectedSum = ((n + 1) * (n + 2)) / 2;
  let actualSum = sumOfElements(arr);
  //   arr.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - actualSum;
}

// custom method of doing sum of elements
function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let res = findMissingNumber(arr, 4);

console.log(res);
