var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");

// Assign Hours to hour element
$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});

// Check if times have passed
$(".hour").each(function(index) {
    var idSelect = index + 1;
    if (parseInt(hours[index]) === parseInt(currentTime)) {
        $("#hour-"+ idSelect).attr("class", "col-10 description present");
        console.log("equal");
    }
    
    else if (parseInt(hours[index]) > parseInt(currentTime)) {
        $("#hour-"+ idSelect).attr("class", "col-10 description future");
        console.log("It's future")
    }
    
    else if (parseInt(hours[index]) < parseInt(currentTime)) {
        $("#hour-"+ idSelect).attr("class", "col-10 description past");
        console.log("It's past")
    };
});