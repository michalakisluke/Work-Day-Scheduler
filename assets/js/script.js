var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");
console.log(currentTime);


$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});



$(".hour").each(function(index) {
    console.log(hours[index]);
    console.log(currentTime);
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