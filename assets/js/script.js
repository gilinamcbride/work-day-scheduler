//variables on page needed
var itemDescription = $(".description");
var saveButton = $("#saveButton");
var header = $(".jumbotron");
var itemText = [];

//add current date to jumbotron
function date() {
  var today = new Date();
  header.append(today);
}
//audit to refresh page and check for time
//past activities turn red
//current activities turn green

//load items fx
var loadItems = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));
};

//save items fx
var saveItems = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
saveButton.on("click", saveItems);

//load items for the first time
//loadItems();
