const removeDuplicates = (function () {
  const array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 8];

  return function () {
    return array.filter((value, index, sum) => {
      return sum.indexOf(value) === index;
    });
  };
})();

console.log(removeDuplicates());
