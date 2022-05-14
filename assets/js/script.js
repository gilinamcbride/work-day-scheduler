var showDate = function () {
  var today = moment().format("MMMM DD, YYYY");
  $(".jumbotron").append($("<p>").addClass("date").text(today));
};
showDate();

function colorTime() {
  switch (parseInt(moment().format("H"))) {
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
      $("#hour11").addClass("future");
      $("#hour12").addClass("future");
      $("#hour1").addClass("future");
      $("#hour2").addClass("future");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 11:
      $("#hour10").removeClass("present");
      $("#hour11").removeClass("future");
      $("#hour11").addClass("present");
      $("#hour12").addClass("future");
      $("#hour1").addClass("future");
      $("#hour2").addClass("future");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 12:
      $("#hour11").removeClass("present");
      $("#hour12").removeClass("future");
      $("#hour12").addClass("present");
      $("#hour1").addClass("future");
      $("#hour2").addClass("future");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 13:
      $("#hour12").removeClass("present");
      $("#hour1").removeClass("future");
      $("#hour1").addClass("present");
      $("#hour2").addClass("future");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 14:
      $("#hour1").removeClass("present");
      $("#hour2").removeClass("future");
      $("#hour2").addClass("present");
      $("#hour3").addClass("future");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 15:
      $("#hour2").removeClass("present");
      $("#hour3").removeClass("future");
      $("#hour3").addClass("present");
      $("#hour4").addClass("future");
      $("#hour5").addClass("future");
      break;
    case 16:
      $("#hour3").removeClass("present");
      $("#hour4").removeClass("future");
      $("#hour4").addClass("present");
      $("#hour5").addClass("future");
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

function loadItems() {
  var getItemText = localStorage.getItem("9AM");
  $("#hour9").val(getItemText);

  var getItemText = localStorage.getItem("10AM");
  $("#hour10").val(getItemText);

  var getItemText = localStorage.getItem("11AM");
  $("#hour11").val(getItemText);

  var getItemText = localStorage.getItem("12PM");
  $("#hour12").val(getItemText);

  var getItemText = localStorage.getItem("1PM");
  $("#hour1").val(getItemText);

  var getItemText = localStorage.getItem("2PM");
  $("#hour2").val(getItemText);

  var getItemText = localStorage.getItem("3PM");
  $("#hour3").val(getItemText);

  var getItemText = localStorage.getItem("4PM");
  $("#hour4").val(getItemText);

  var getItemText = localStorage.getItem("5PM");
  $("#hour5").val(getItemText);
}

function saveItems9() {
  var itemText = $("#hour9").val().trim();
  localStorage.setItem("9AM", itemText);
}
$("#saveButton9").on("click", saveItems9);

function saveItems10() {
  var itemText = $("#hour10").val().trim();
  localStorage.setItem("10AM", itemText);
}
$("#saveButton10").on("click", saveItems10);

function saveItems11() {
  var itemText = $("#hour11").val().trim();
  localStorage.setItem("11AM", itemText);
}
$("#saveButton11").on("click", saveItems11);

function saveItems12() {
  var itemText = $("#hour12").val().trim();
  localStorage.setItem("12PM", itemText);
}
$("#saveButton12").on("click", saveItems12);

function saveItems1() {
  var itemText = $("#hour1").val().trim();
  localStorage.setItem("1PM", itemText);
}
$("#saveButton1").on("click", saveItems1);

function saveItems2() {
  var itemText = $("#hour2").val().trim();
  localStorage.setItem("2PM", itemText);
}
$("#saveButton2").on("click", saveItems2);

function saveItems3() {
  var itemText = $("#hour3").val().trim();
  localStorage.setItem("3PM", itemText);
}
$("#saveButton3").on("click", saveItems3);

function saveItems4() {
  var itemText = $("#hour4").val().trim();
  localStorage.setItem("4PM", itemText);
}
$("#saveButton4").on("click", saveItems4);

function saveItems5() {
  var itemText = $("#hour5").val().trim();
  localStorage.setItem("5PM", itemText);
}
$("#saveButton5").on("click", saveItems5);

loadItems();
