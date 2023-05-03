const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32];
let count = 0; // Adding variable for itteration counter with starting index 0

const selectionSort = (array) => {
   for (let i = 0; i < array.length - 1; i++) {
      // We make a loop that will itterate over whole array
      let indexMin = i;
      for (let j = i + 1; j < array.length; j++) {
         /*
         Inside this loop we make another loop that will find min element in
         array and replace with it element from outer loop. We start inner 
         loop from index of first loop + 1, not from 0. So, when we replace
         the element we don't need to search again.
         */
         if (array[j] < array[indexMin]) {
            // Finding min element in subarray starting at j
            indexMin = j;
         }
         count += 1; // Adding itteration counter
      }
      if (indexMin !== i) {
         /*
         Checking at the end of the outer loop to only swap elements if the
         minimum element was found (i.e., if indexMin is different from i)
         */
         let tmp = array[i];
         array[i] = array[indexMin];
         array[indexMin] = tmp;
      }
   }
      return array;
};

console.log(selectionSort(arr)); // [-5, -1, 0, 1, 1, 1, ...., 32, 35]
console.log(arr.length); // 26 elements. It means that complexity of the algorithm is O(n*n).
console.log('count = ', count); // count = 325