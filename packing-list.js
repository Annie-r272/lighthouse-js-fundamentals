const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

//________________For Loop___________________________
console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}


//_______________While Loop__________________________

console.log("Kitchen stuff to pack:");
let j = 0;
while (j < packingList.length) {
  console.log(packingList[j]);
  j++;
}