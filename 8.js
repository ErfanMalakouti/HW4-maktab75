function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
//Example:
console.log(merge([1, 4, 6, 7], [3, 2, 5, 8])); //[1,3,2,4,5,6,7,8]
///////////////////////////////////////////////////////////////////
let mergeSort = (unsortedArray) => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  let middle = Math.floor(unsortedArray.length / 2);
  let left = unsortedArray.slice(0, middle);
  let right = unsortedArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};
//Example:
console.log(mergeSort([1, 4, 6, 7, 3, 2, 5, 8])); //[1,2,4,5,6,3,7,8]
