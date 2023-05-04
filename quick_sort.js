const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32];
let count = 0; // Adding variable for itteration counter with starting index 0

const quickSort = (array) => {
   //Creating the condiction when recursion ends. 
   if (array.length <= 1) {
      return array;
   }
   // Define the pivot element by halving the array and round the value with Math.floor() function.
   let pivotIndex = Math.floor(array.length / 2);
   let pivot = array[pivotIndex];// Getting the pivot element for the array
   let less = []; // Creating the array with elements that are less than pivotIndex
   let greater = []; // Creating the array with elements that are greater than pivotIndex

   // Comparing every element with the pivot element
   for (let i = 0; i < array.length; i++) {
      count += 1; // Adding itteration counter
      
      // The first condition: we compare index of current itteration in the loop with the pivot index and if they are equal, we skip this iteration.
      if (i === pivotIndex)
         continue;

      // The second condition: we check if the current element of itteration is less than the pivot element, we will add it to the loop 'less'.
      if (array[i] < pivot) {
         less.push(array[i]);
      } else {
         greater.push(array[i]); // Otherwise we add it to the loop 'greater'
      }
   }
   
   // As the result, we return an array where we deploy the result of recursion function 'quickSort' less and greater arrays. And in the middle of the array we put pivot element.  
   return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arr)); // [-5, -1, 0, 1, 1, 1, ...., 32, 35]
console.log('count = ', count); // count = 112