# Insertion Sort:

Insertion sort is a sorting algorithm that involves spliting of the collection that you wish to sort. The collection is split into two parts: sorted and unsorted. Values from the unsorted half are picked and put into the correct positon in the sorted half. we move out of place elements down into the sorted half of the array as we iterate through it.

## Pseudocode:

```js
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Trace

- Example Array: `[8, 4, 23, 42, 16]`;

### part 1

In the first step of the iteration, we find that `temp` - 4 in this instance - is less than `arr[j]`. and since `j === 0`, we set `arr[j+1]` to equal 8. and since `j-1 = -1`. we would break and set `arr[j+1] = temp`.

![alt text](javascript/code-challenges/insertionSort/assets/part1.png)

### part 2

On the next iteration, we reach a point where `temp` is greater than `arr[j]`. since this the case, we can continue forward.

![alt text](javascript/code-challenges/insertionSort/assets/part2.png)

### part 3

At last, we reach a point where temp will be less than `arr[j]`. In this case, 16 is less than 42. by setting `arr[j+1] = arr[j]` we will set element at position 4 equal to 42. However, instead of breaking out to set `arr[j+1] = temp`, we will continue to move back down the array on j until we reach a value where `temp >= arr[j]`. and once that value is found, can set `arr[j+1]`, in this case arr[2], equal to 16.

![alt text](javascript/code-challenges/insertionSort/assets/part3.png)

### part 4

The sort will end once i has reach the end of the array, and once it comfirms that `arr[j]` is not greater than `temp`.

![alt text](javascript/code-challenges/insertionSort/assets/part4.png)

## Efficency:

- Time: `O(n^2)` since we are using another loop to check if temp is greater than or equal to
  `arr[j]` with each pass of the for loop. loop inside a loop.
