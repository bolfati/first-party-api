// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
var currentDate = new Date();
var currentHour = currentDate.getHours();
var nineAm = $("#hour-9"); // getting a handle on each time block for each hour
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelveAm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $("#hour-15");
var fourPm = $("#hour-16");
var fivePm = $("#hour-17"); 
var buttonElement = $(".btn"); // getting a handle on button ID for reference in future
var description = $(".description");

var saved1 = localStorage.getItem('memo1')  
var saved2 = localStorage.getItem('memo2')
var saved3 = localStorage.getItem('memo3')
var saved4 = localStorage.getItem('memo4')
var saved5 = localStorage.getItem('memo5')
var saved6 = localStorage.getItem('memo6')
var saved7 = localStorage.getItem('memo7')
var saved8 = localStorage.getItem('memo8')
var saved9 = localStorage.getItem('memo9')

nineAm.children(".description").get(0).value = saved1;
tenAm.children(".description").get(0).value = saved2;
elevenAm.children(".description").get(0).value = saved3;
twelveAm.children(".description").get(0).value = saved4;
onePm.children(".description").get(0).value = saved5;
twoPm .children(".description").get(0).value = saved6;
threePm.children(".description").get(0).value = saved7;
fourPm.children(".description").get(0).value = saved8;
fivePm.children(".description").get(0).value = saved9;



$('#currentDay').text(today.format('MMM D, YYYY')); // displays the date at the top of the page

// if current hour is in past, apply past class, 
// if current hour is current hour, apply present.
// if current hour is before future, apply future



$(function () {
  
  // creating an array to target specific hours in our HTML for reference.
  var elements = [ 
    {hour: 9, element: nineAm},
    {hour: 10, element: tenAm},
    {hour: 11, element: elevenAm},
    {hour: 12, element: twelveAm},
    {hour: 13, element: onePm},
    {hour: 14, element: twoPm},
    {hour: 15, element: threePm},
    {hour: 16, element: fourPm},
    {hour: 17, element: fivePm},
    
  ];
  
  elements.forEach(({ hour, element }) => {
    if (currentHour === hour) {
      element.addClass("present");
    } else if (currentHour > hour) {
      element.addClass("past");
    } else {
      element.addClass("future");
    }
  });

  buttonElement.on("click", function (event) { //button listener for our save buttons
  event.preventDefault();
  var buttonParent = $(this).parent();
  var saveButton = $(this).parent().attr("id");// where we save our input
  var memo = buttonParent.children(".description").get(0).value;
  console.log(memo); 

switch (saveButton) { 
  case "hour-9":
    localStorage.setItem("memo1", memo);
    break;
  case "hour-10":
    localStorage.setItem("memo2", memo);
    break;
  case "hour-11":
    localStorage.setItem("memo3", memo);
    break;
  case "hour-12":
    localStorage.setItem("memo4", memo);
    break;
    case "hour-13":
    localStorage.setItem("memo5", memo);
    break;
    case "hour-14":
    localStorage.setItem("memo6", memo);
    break;
    case "hour-15":
    localStorage.setItem("memo7", memo);
    break;
    case "hour-16":
    localStorage.setItem("memo8", memo);
    break;
    case "hour-17":
    localStorage.setItem("memo9", memo);
    break;
  }
  console.log(saveButton);
});
});



// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page