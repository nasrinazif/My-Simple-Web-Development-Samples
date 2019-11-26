var myList = [];
var userInput;

while (userInput != "quit") {
  userInput = prompt("Add a NUMBER to the list!");
  if (userInput != "quit") {
    userInput = Number(userInput);
    if (typeof(userInput) == "number") {
      myList.push(userInput);
    } else {
      alert("Please Enter a NUMBER!")
    }
  }
}

console.log("****** The Numbers You Entered Are: ******");
myList.forEach(function(item, i) {
  console.log(i + ": " + item);
});
console.log("*********************************");

result = 0;
for (i = 0; i < myList.length; i++) {
  result += myList[i];
}

console.log("")
console.log("----------------------------------");
console.log("The Sum of Array is: " + result);
console.log("----------------------------------");
