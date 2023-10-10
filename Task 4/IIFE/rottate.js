(function () {
  var arr = [1, 2, 3, 4, 5];
  var k = 2;

  function rotateArray(arr, k) {
    for (var i = 0; i < k; i++) {
      var temp = arr.shift();
      arr.push(temp);
    }
  }

  console.log("Original Array: " + arr);
  rotateArray(arr, k);
  console.log("Rotated Array: " + arr);
})();
