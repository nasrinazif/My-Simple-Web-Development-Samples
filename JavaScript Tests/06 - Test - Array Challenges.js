
var myList = [];
var userInput = "sds";

while(userInput != "quit"){
  userInput = prompt("Add an item to the list!");
  if(userInput != "quit"){
    myList.push(userInput);
  }
}

console.log("****** The List Items Are: ******");
myList.forEach(function(item, i){
  console.log(i + ": " + item);
});
console.log("*********************************");

printReverse(myList);

function printReverse(myList){
  console.log("");
  console.log("---------------------------------");
  console.log("The Reverse of Your Items is: ");
  tempList = myList;
  while(tempList.length != 0){
    popedItem = tempList.pop();
    console.log(popedItem);
  }
  console.log("---------------------------------");
}
