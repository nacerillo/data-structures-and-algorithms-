module.exports = function BinarySearch(arr, start, end, element) {
  let arr2 = [];
  const middle = Math.ceil(arr.length / 2);

  if (arr[middle] === element) {
    return middle;
  } else if (arr[middle] > element) {
    return BinarySearch(arr, element, start, middle - 1, element);
  } else if (arr[middle] < element) {
    return BinarySearch(arr, middle + 1, end, element);
  } else {
    return -1;
  }
};
