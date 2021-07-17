let merge = (l, r) => {
  const result = [];

  while (l.length && r.length) {
    if (a[0] > b[0]) {
      result.push(b.shift());
    } else {
      result.push(a.shift());
    }
  }
  while (l.length) {
    result.push(l.shift());
  }
  while (r.length) {
    result.push(r.shift());
  }

  return result;
};

let mergeSort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.splice(0, mid);
    let right = arr.splice(mid, n);

    let sortedL = mergeSort(left);
    let sortedR = mergeSort(right);
    return merge(sortedL, sortedR);
  }
  return arr;
};

export default = mergeSort();