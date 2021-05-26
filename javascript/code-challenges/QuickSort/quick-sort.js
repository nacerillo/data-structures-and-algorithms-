function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

let partition = (arr, left, right) => {
  let pivot = arr[right];
  console.log("THE PIVOT IS: ", pivot);
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
      console.log("After Swap1: ", arr);
    }
  }
  swap(arr, right, low + 1);
  console.log("After Swap2: ", arr);
  return low + 1;
};

module.exports = quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
};
