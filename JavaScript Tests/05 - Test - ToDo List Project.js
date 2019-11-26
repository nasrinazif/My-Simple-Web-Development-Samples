window.setTimeout(function() {
  var userResponse;
  var todoList = [];

  function todoAddNewItem(){
    item = prompt("*** Enter an item to be added to your todo list! ***");
    return todoList.push(item);
    console.log(" Item " + "\" " + item + "\"" + " was added to the todo list!")
  }

  function todoList(){
    console.log("******* The Todo List Items: *******");
    for(i=0; i<todoList.length; i++){
      console.log(i + ": " + todoList[i])
    }
    console.log("************************************");
  }

  function todoDeleteAnIndex(){
    console.log("******* The Todo List Items: *******");
    for(i=0; i<todoList.length; i++){
      console.log(i + ": " + todoList[i])
    }
    console.log("************************************");
  }

  while(userResponse != "quit"){

    userResponse = prompt("What do you want to do?");
    var item;

    if(userResponse === "new"){
      todoAddNewItem();
    }

    else if(userResponse === "list"){
      todoList();
    }

    else if(userResponse === "delete"){
      todoDeleteAnIndex();
    }

  }
  console.log("You quited the app!")
}, 100);
