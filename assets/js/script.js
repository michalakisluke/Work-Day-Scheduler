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
    }
    
    else if (parseInt(hours[index]) > parseInt(currentTime)) {
        $("#hour-"+ idSelect).attr("class", "col-10 description future");
    }
    
    else if (parseInt(hours[index]) < parseInt(currentTime)) {
        $("#hour-"+ idSelect).attr("class", "col-10 description past");
    };
});

// Save text in text area 

$("textarea").each(function(index){
    idSelect = index + 1;
    $("#button-"+idSelect).on("click", function() {
        var targetId = event.target.id.split("-")[1];
        console.log(targetId);
        console.log($(this).attr("id"));
        console.log("hour-"+targetId);
    })
});

// Display text in text area on refresh