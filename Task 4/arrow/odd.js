const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumber = number.filter((value) => {
  return value % 2 == 1;
});
console.log(oddNumber);
