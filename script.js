$(document).ready(function() {

//created from html classes and ids
var currentDate = moment().format("LL")
var blockHour = $(".hour")
var time = moment().format('h:mm a')
var currentHour = parseInt(time)

//adds current day to header/jumbotron
$("#currentDay").append(currentDate)

//added current time to the jumbotron
function currentTime() { 
    var timeNow = moment().format('h:mm a')
    $("#currentTime").text(timeNow)
}
    setInterval(currentTime, 1000)

//adds input into event id
// function eventPlanner() {
//     $("#event").add("form").val("text")
// }

var eventHour = $(".event")
function colorCode() {
    for (var i=0; i < blockHour.length; i++) {

       var hour = parseInt($(blockHour[i]).attr("hour"))

        console.log(blockHour[i].textContent.trim())
        if (hour < currentHour) {
            $(eventHour[i]).addClass("past");
        } 
        else if (hour === currentHour) {
            $(eventHour[i]).removeClass("past");
            $(eventHour[i]).addClass("present");
        } 
        else {
            $(eventHour[i]).removeClass("past");
            $(eventHour[i]).removeClass("present");
            $(eventHour[i]).addClass("future");
        }
    }
}

colorCode()
//eventPlanner()

//saves to local storage
// function saveMe() {

// }

})
