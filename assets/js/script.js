var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");
let saveTasksArray;


function checkTask() {
    saveTasksArray =  JSON.parse(window.localStorage.getItem('tasks')) || [["hour-1", ""],["hour-2", ""],["hour-3", ""],["hour-4", ""],["hour-5", ""],
                                                                           ["hour-6", ""],["hour-7", ""],["hour-8", ""],["hour-9", ""]];
}
  
checkTask();

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
    $("#button-" + idSelect).on("click", function (event) {
        var $target = $(event.target);
    
        if ($target.is("i")) {
            $target = $target.parent();
        }
    
        var targetId = ($target.attr("id").split("-")[1]);
        var textareaText = $("#hour-"+targetId).val();

        saveTasksArray.splice(index, index, ["hour-"+idSelect, textareaText]);

        //saveTasksArray.push([("hour-"+targetId),textareaText]);
        localStorage.setItem("tasks",JSON.stringify(saveTasksArray));
    });
});


// Display text in text area on refresh