$(document).ready(function() {

var currentDate = moment().format("LL")
var blockHour = $(".hour")
var time
var currentHour = time

//adds current day to header/jumbotron
$("#currentDay").append(currentDate)

//added ticking time to the jumbotron
function currentTime() { 
    var time = moment().format('h:mm a')
    $("#currentTime").text(time)
}
var interval = setInterval(currentTime, 1000)

//added input into event id
function eventPlanner() {
    $("#event").add("form", "text")
}
eventPlanner()
colorCode()

//changes the color of event id based on time
function colorCode() {
for (var i=0; i < blockHour.length; i++) {
    console.log(blockHour[i].textContent.trim())
    if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
}
}

//saves to local storage
// function saveMe() {

// }




//console.log(m.get('hour'))
//console.log(sec)

})
