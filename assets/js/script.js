var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//var currentTime = moment().format("HH");

var currentTime = 12;



$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});



$(".hour").each(function(index) {
    console.log("Value at index " + hours[index]);
    console.log("Value at current " + currentTime);
    console.log(typeof hours[index]);
    console.log(typeof currentTime);
    if (parseInt(hours[index]) === parseInt(currentTime)) {
        $("#hour-"+ index).attr("class", "col-10 description present");
        console.log("equal");
    }
    
    else if (parseInt(hours[index]) > parseInt(currentTime)) {
        $("#hour-"+ index).attr("class", "col-10 description future");
        console.log("It's future")
    }
    
    else if (parseInt(hours[index]) < parseInt(currentTime)) {
        $("#hour-"+ index).attr("class", "col-10 description past");
        console.log("It's past")
    };
});