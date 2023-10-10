const convertToTitleCaps = (function () {
  const array = ["rajaram", "ravi", "suresh", "jeyam"];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return function () {
    return array.map((word) => capitalizeFirstLetter(word));
  };
})();

console.log(convertToTitleCaps());
