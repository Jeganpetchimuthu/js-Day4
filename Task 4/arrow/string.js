const strings = ["hai ", "hello", "welcome"];

const titleCaseStrings = strings.map((string) =>
  string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

console.log(titleCaseStrings);
