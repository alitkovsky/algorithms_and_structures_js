const factorial = (n) => {
   if (n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

console.log(factorial(5)); // factoral(5) = (5 * 1) + (5 * 2) + (5 * 3) + (5 * 4) = 120

const fibonachi = (n) => {
   // The fibonacci numbers is the chain of numbers where every subsequent number equals to the sum of the previous two numbers
   // The fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21 ...
   if (n === 1 || n === 2) {
      return 1;
   }
   return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log(fibonachi(8)); // 21

