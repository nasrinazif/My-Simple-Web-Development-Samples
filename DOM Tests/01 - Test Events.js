var todoItems = document.querySelectorAll(".todoitem");

console.log(todoItems);
console.log(todoItems.length);

for (var i = 0; i < todoItems.length; i++) {
    todoItems[i].addEventListener("click", function() {
        this.classList.toggle("todoChecked");
    })

}