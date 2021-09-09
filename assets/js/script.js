var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];


$(".hour").each(function(index, element) {
    $(element).text(moment().hour(hours[index]).format("h A"));
});



$(".hour").each(function() {
    if ($(".hour").value === moment().format("h A").value) {
        $(".description").attr("class", "col-10 description present");
    }
    
    else if ($(".hour").value > moment().format("h A").value) {
        $(".description").attr("class", "col-10 description future");
    }
    
    else if ($(".hour").value < moment().format("h A").value) {
        $(".description").attr("class", "col-10 description past");
    };
});