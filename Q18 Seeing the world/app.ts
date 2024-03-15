// Step 1: Define an array with five places
let places: string[] = [`Paris`, `New York`, `Turkey`, `Pakistan northen side`,`Germeny`];

// Step 2: Print the original array
console.log(`Original Order:\n`, places);

// Step 3: Print the array in alphabetical order without modifying the actual list
console.log(`Alphabetical Order:\n`, places.slice().sort());

// Step 4: Show that the original array is still in its original order
console.log(`Original Order after alphabetical sort:\n`, places);

// Step 5: Print the array in reverse alphabetical order without changing the order of the original list
console.log(`Reverse Alphabetical Order:\n`, places.slice().sort().reverse());

// Step 6: Show that the original array is still in its original order
console.log(`Original Order after reverse alphabetical sort:\n`, places);

// Step 7: Reverse the order of the original list
places.reverse();
console.log(`Reversed Order:\n`, places);

// Step 8: Reverse the order of the list again to get it back to the original order
places.reverse();
console.log(`Original Order after double reverse:\n`, places);

// Step 9: Sort the array in alphabetical order
places.sort();
console.log(`Sorted in Alphabetical Order:\n`, places);

// Step 10: Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log(`Sorted in Reverse Alphabetical Order:\n`, places);
