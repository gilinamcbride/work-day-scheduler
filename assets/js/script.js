//variables on page needed
var saveButton = $("#saveButton");
var header = $(".jumbotron");
var today = moment().format("MMMM DD, YYYY");
var time = moment().format("hh:mm A");

var showDate = function () {
  var date = $("<p>").addClass("date").text(today);
  header.append(date);
};
showDate();

//TODO: change colors with time:
function colorTime() {
  var currentDate = new Date();

  switch (currentDate.getHours()) {
    case 9:
      $("#hour9").addClass("present");
      $("#hour10").addClass("future");
      $("#hour11").addClass("future");
      $("#hour12").addClass("future");
      $("#hour1").addClass("future");
      $("#hour2").addClass("future");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 10:
      $("#hour9").removeClass("present");
      $("#hour10").removeClass("future");
      $("#hour10").addClass("present");
      break;
    case 11:
      $("#hour10").removeClass("present");
      $("#hour11").removeClass("future");
      $("#hour11").addClass("present");
      break;
    case 12:
      $("#hour11").removeClass("present");
      $("#hour12").removeClass("future");
      $("#hour12").addClass("present");
      break;
    case 13:
      $("#hour12").removeClass("present");
      $("#hour1").removeClass("future");
      $("#hour1").addClass("present");
      break;
    case 14:
      $("#hour1").removeClass("present");
      $("#hour2").removeClass("future");
      $("#hour2").addClass("present");
      break;
    case 15:
      $("#hour2").removeClass("present");
      $("#hour3").removeClass("future");
      $("#hour3").addClass("present");
      break;
    case 16:
      $("#hour3").removeClass("present");
      $("#hour4").removeClass("future");
      $("#hour4").addClass("present");
      break;
    case 17:
      $("#hour4").removeClass("present");
      $("#hour5").removeClass("future");
      $("#hour5").addClass("present");
      break;
    default:
      break;
  }
  setInterval(function () {
    colorMinutes();
  }, 1000 * 60 * 60);
}
colorTime();

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

// var showTime = function () {

//   var getTime = $("<p>").addClass("date").text(time);
//   header.append(getTime);
// };
// setInterval(function () {
//   header.remove(".date");
//   showTime();
// }, 60000);
// showTime();

//TODO: audit to refresh page and check for time of day
// var auditSchedule = function () {
//   var date = today;

//   function hour9() {
//     $("#hour9").removeClass("past");
//     //TODO: present activities
//     if (moment(date, "L").add(9, "hour")) {
//       console.log("equal");
//       $("#hour9").addClass("present");
//     }
//     //TODO: future activities
//     if (moment(date, "L").add(10, "hour")) {
//       console.log("before");
//       $("hour9").addClass("future");
//     }
//     //TODO: past activities
//     else {
//       console.log("after");
//       $("hour9").addClass("past");
//     }
//   }
//   hour9();

//   function hour1() {
//     $("#hour2").removeClass("past");
//     //TODO: present activities
//     if (moment(date, "L").add(14, "hour")) {
//       console.log("equal");
//       $("#hour2").addClass("present");
//     }
//     //TODO: future activities
//     if (moment(date, "L").add(13, "hour")) {
//       console.log("before");
//       $("hour2").addClass("future");
//     }
//     //TODO: past activities
//     else {
//       console.log("after");
//       $("hour2").addClass("past");
//     }
//   }
//   hour1();

//   function hour2() {
//     $("#hour3").removeClass("past");
//     //TODO: present activities
//     if (moment(date, "L").add(15, "hour")) {
//       console.log("equal");
//       $("#hour3").addClass("present");
//     }
//     //TODO: future activities
//     else if (moment(date, "L").add(14, "hour")) {
//       console.log("before");
//       $("hour3").addClass("future");
//     }
//     //TODO: past activities
//     else {
//       console.log("after");
//       $("hour3").addClass("past");
//     }
//   }
//   hour2();

//   setInterval(function () {
//     auditSchedule();
//   }, 1000 * 60 * 60);
// };
// auditSchedule();
