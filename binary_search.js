const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let count = 0; // Adding variable for itteration counter with starting index 0

const binarySearch = (array, item) => {
   let start = 0;
   let end = array.length;
   let middle;
   let found = false;
   let position = -1;

   while (found === false && start <= end) {
      count += 1; // Adding itteration counter

      middle = Math.floor((start + end) / 2); // middle = (0 + 16) / 2 = 8
      // in case we can get odd number we need to add Math.floor function
      if (array[middle] === item) {
         found = true;
         position = middle;
         return position;
      }
      if (item < array[middle]) {
         end = middle - 1;
      } else {
         start = middle + 1;
      }
   };

   return position;
};

console.log(binarySearch(array, 4)); // 4
console.log('count = ', count); // count = 4