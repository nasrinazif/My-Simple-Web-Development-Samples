var todoItems = document.querySelectorAll(".todoitem");

for (var i = 0; i < todoItems.length; i++) {
    todoItems[i].addEventListener("click", function() {
        this.classList.toggle("todoChecked");
    })

}

var allH3 = document.querySelectorAll("h3");

for (var i = 0; i < allH3.length; i++) {
    allH3[i].addEventListener("mouseenter", function() {
        this.classList.toggle("h3Hover");
    })

    allH3[i].addEventListener("mouseout", function() {
        this.classList.toggle("h3Hover");
    })

}