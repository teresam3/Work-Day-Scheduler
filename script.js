var m = moment()
var currentDate = m.format("LL")

//adds current day to header/jumbotron
$("#currentDay").append(currentDate)

console.log(m.get('hour'))