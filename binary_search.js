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
};

   // Recursive binary search function
const recursiveBinarySearch = (array, item, start, end) => {
   let middle = Math.floor((start + end) / 2); // Define middle element
   count += 1; // Adding itteration counter

   // Check if defining element is equal to middle we return index of this element. If it's not, we are moving on.
   if (item === array[middle]) {
      return middle;
   }
   // Check if defining element is smaller than middle we return recursiveBinarySearch() result without middle element and right from middle part of array. If it's not, we return recursiveBinarySearch() result withiout middle element and left from middle part of array.
   if (item < array[middle]) {
      return recursiveBinarySearch(array, item, start, middle - 1);
   } else {
      return recursiveBinarySearch(array, item, middle + 1, end);
   } 

};

/* Binary Search
console.log(binarySearch(array, 4)); // 4
console.log('count = ', count); // count = 4
*/

// Recursive Binary Search
console.log(recursiveBinarySearch(array, 12, 0, array.length)); // 12
console.log('count = ', count); // count = 12