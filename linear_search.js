const array = [1,4,5,8,5,1,2,7,5,2,11];

let count = 0; // Adding variable for itteration counter with starting index 0

function linearSearch(array, item) {
   for (let i = 0; i < array.length; i++) {
      count += 1; // Adding itteration counter
      if (array[i] === item) {
         return i;
      }
   }
   return null;
};

console.log(linearSearch(array, 8)); // 3
console.log('count = ', count); // count = 4