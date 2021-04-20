module.exports = function InsertShiftArray(arr, element) {
  let arr2 = [];
  const middle = Math.ceil(arr.length / 2);

  for (var x = 0; x < arr.length; x++) {
    if (x == middle) {
      arr2.push(element);
    }
    arr2.push(arr[x]);
  }
  console.log(arr2);
  return arr2;
};
