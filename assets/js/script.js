//variables on page needed
var itemDescription = $(".description");
var saveButton = $("#saveButton");
var header = $(".jumbotron");
// var itemText = [];
var today = moment().format("MMMM DD, YYYY");

var showDate = function () {
  var date = $("<p>").addClass("date").text(today);
  header.append(date);
};
showDate();

var showTime = function () {
  var time = moment().format("hh:mm A");
  var getTime = $("<p>").addClass("date").text(time);
  header.append(getTime);
  setInterval(function () {
    getTime.text("");
    showTime();
  }, 60000);
};
showTime();

//TODO: audit to refresh page and check for time of day
var auditSchedule = function (itemDescription) {
  var date = today;
  var time = moment(date, "L").set("hour", 23);
  //TODO: past activities turn grey --> moment time + x hours to get past hour of list
  if (moment().isAfter(time)) {
    $(itemDescription).addClass("past");
  }
  //TODO: current activities turn green ---> moment time + x hours to get to exact hour of list
  if (moment().isBefore(time)) {
    $(itemDescription).addClass("future");
  }
  //TODO: current activities turn red ---> moment time + x hours to get to exact hour of list
  if (moment(time)) {
    $(itemDescription).addClass("present");
  }
  setInterval(function () {
    $(".description").each(function (index, el) {
      auditSchedule(el);
    });
  }, 1000 * 60 * 30);
};

//TODO: load items fx
// var loadItems = function () {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
// };

//TODO: save items fx
var saveItems = function () {
  console.log("this works");
  var itemText = $(this).find("textarea").text().trim();
  localStorage.setItem("itemText", JSON.stringify(itemText));
};
saveButton.on("click", saveItems);

//TODO: load items for the first time
//loadItems();
