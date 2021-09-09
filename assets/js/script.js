var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");


$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});



$(".hour").each(function(index) {
    console.log(hours[index]);
    console.log(currentTime);
    console.log(hours[index] === currentTime)
    console.log(hours[index] > currentTime)
    console.log(hours[index] < currentTime)
    console.log("New time");
    if (hours[index] === currentTime) {
        $(".description").attr("class", "col-10 description present");
    }
    
    else if (hours[index] > currentTime) {
        $(".description").attr("class", "col-10 description future");
    }
    
    else if (hours[index] < currentTime) {
        $(".description").attr("class", "col-10 description past");
    };
});