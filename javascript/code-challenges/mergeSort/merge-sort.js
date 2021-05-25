let merge = (l, r, array) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < l.length && j < r.length) {
    if (l[i] < r[j]) {
      array[k] = l[i];
      i += 1;
    } else {
      array[k] = r[j];
      j += 1;
    }
    k += 1;
  }
  if (i === l.length) {
  }
};

module.exports = mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.splice(0, mid);
    let right = arr.splice(-mid);

    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
  }
  return arr;
};
