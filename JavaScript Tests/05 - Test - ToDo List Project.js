window.setTimeout(function() {
  var userResponse;
  var todoList = [];

  function todoAddNewItem() {
    item = prompt("*** Enter an item to be added to your todo list! ***");
    todoList.push(item);
    console.log("Item " + "\" " + item + "\"" + " was added to the todo list!")
  }

  function todoListItems() {
    console.log("******* The Todo List Items: *******");
    for (i = 0; i < todoList.length; i++) {
      console.log(i + ": " + todoList[i])
    }
    console.log("************************************");
  }

  function todoDeleteAnIndex() {
    deleteIndex = prompt("*** Enter the index of the item you want to delete! ***");
    todoList.splice(deleteIndex, 1);
    console.log("Item number " + "\" " + deleteIndex + "\"" + " was removed from the todo list!")
  }

  while (userResponse != "quit") {

    userResponse = prompt("What do you want to do?");
    var item;

    if (userResponse === "new") {
      todoAddNewItem();
    } else if (userResponse === "list") {
      todoListItems();
    } else if (userResponse === "delete") {
      todoDeleteAnIndex();
    }

  }
  console.log("You quited the app!")
}, 100);
