var myList = [];
var userInput;

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

result = true;
for(i=0; i<myList.length; i++){
  for(j=i+1; j<myList.length; j++){
    if(myList[i] != myList[j]){
      result = false;
    }
  }
}

if(result == true){
  console.log("")
  console.log("----------------------------------");
  console.log("Yeah, All items are identical!");
  console.log("----------------------------------");
}
else{
  console.log("")
  console.log("----------------------------------");
  console.log("Sorry, All items are NOT identical!");
  console.log("----------------------------------");
}
