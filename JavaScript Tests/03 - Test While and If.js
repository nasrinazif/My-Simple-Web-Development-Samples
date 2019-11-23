var userResponse = prompt("Are we there yet?");
while(userResponse.indexOf("yes") < 0 && userResponse.indexOf("yeah") < 0){
  userResponse = prompt("Are we there yet?");
}
alert("Yay, we finally made it!")
