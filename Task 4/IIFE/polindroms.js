const findPalindromes = (function () {
  const array = ["level", "hello", "racecar", "world", "madam"];

  return function () {
    return array.filter((word) => {
      const reversed = word.split("").reverse().join("");
      return word === reversed;
    });
  };
})();

console.log(findPalindromes());
