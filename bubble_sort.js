const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32];
let count = 0; // Adding variable for itteration counter with starting index 0

const bubbleSort = (array) => {
   /*
   Creating two loops - outer and inner. Both loops will we itterate through the whole length of an array. 
    */
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         /*
         Insude inner loop we're cheking if element of current itteration is
         greater than elemnt that goes after, we need to swap these elements.
         For this case we make a temporary variable. Assigning it the value of
         element of current itteration. Then assign it to the value of next
         element. After that we assign it the value of temporary element.
         */
         if (array[j+1] < array[j]) {
            let tmp = array[j];
            array[j] = array[j+1];
            array[j+1] = tmp;
         }
         count += 1; // Adding itteration counter
      }
   }
   return array;
};

console.log(bubbleSort(arr)); // [-5, -1, 0, 1, 1, 1, ...., 32, 35]
console.log('length = ', arr.length); // 26 elements. It means that complexity of the algorithm is O(n*n).
console.log('count = ', count); // count = 676