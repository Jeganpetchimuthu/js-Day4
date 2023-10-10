let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = (array) => {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
console.log(sum(array));
