var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");


$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});



$(".hour").each(function(index) {
    console.log("Value at index " + hours[index]);
    console.log("Value at current " + currentTime);
    // console.log("Values are equal");
    // console.log(hours[index] === currentTime);
    // console.log("Current time is earlier than index"); 
    // console.log(hours[index] > currentTime);
    // console.log("Current time is later than index"); 
    // console.log(hours[index] < currentTime);
    // console.log("New time");
    if (hours[index] === currentTime) {
        $(".description").attr("class", "col-10 description present");
        console.log("equal");
    }
    
    else if (hours[index] > currentTime) {
        $(".description").attr("class", "col-10 description future");
        console.log("It's future")
    }
    
    else if (hours[index] < currentTime) {
        $(".description").attr("class", "col-10 description past");
        console.log("It's past")
    };
});