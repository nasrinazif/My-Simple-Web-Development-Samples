window.setTimeout(function() {
  var userResponse;
  var todoList = [];

  while(userResponse != "quit"){

    userResponse = prompt("What do you want to do?");
    var item;

    if(userResponse === "new"){
      item = prompt("*** Enter an item to be added to your todo list! ***");
      todoList.push(item);
      console.log("Item " + "\" " + item + "\"" + " was added to the todo list!")
    }

    if(userResponse === "list"){
      console.log("******* The Todo List Items: *******");
      for(i=0; i<todoList.length; i++){
        console.log(i + ": " + todoList[i])
      }
      console.log("************************************");
    }

    if(userResponse === "delete"){
      deleteIndex = prompt("*** Enter the index of the item you want to delete! ***");
      todoList.splice(deleteIndex, 1);
      console.log("Item number " + "\" " + deleteIndex + "\"" + " was removed from the todo list!")
    }

  }
  console.log("You quited the app!")
}, 100);
