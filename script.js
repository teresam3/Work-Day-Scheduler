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
    var time = moment().format('h:mm a')
    $("#currentTime").text(time)
}
    setInterval(currentTime, 1000)

//adds input into event id
function eventPlanner() {
    $("#event").add("form").val("text")
}

eventPlanner()
colorCode()

console.log(currentHour)

function colorCode() {
    for (var i=0; i < blockHour.length; i++) {
        
       var hour = parseInt($(this).attr("hour"))

        console.log(blockHour[i].textContent.trim())
        if (hour < currentHour) {
            $(this).addClass("past");
        } 
        else if (hour === currentHour) {
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

})
