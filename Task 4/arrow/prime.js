let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
let myPrime = array.filter((element) => isPrime(element));
console.log(myPrime);
