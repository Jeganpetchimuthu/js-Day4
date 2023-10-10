var array1 = [1, 3, 5];
var array2 = [2, 4, 6];

var median = (function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.slice().sort(function (a, b) {
    return a - b;
  });

  var middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
})(array1, array2);

console.log("Median: " + median);
