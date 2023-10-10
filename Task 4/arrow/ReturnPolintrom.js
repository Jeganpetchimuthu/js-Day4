let arr = ["level", "hello", "racecar", "world", "madam"];
let N = arr.length;

let s;
var isPolindrom = (s) => {
  let a = s;
  s = s.split("").reverse().join();
  return s == a;
};
let palindromicStrings = (arr, N) => {
  let ans = [];
  for (let i = 0; i < N; i++) {
    ans.push(arr[i]);
  }
  return ans;
};
console.log(palindromicStrings(arr, N));
