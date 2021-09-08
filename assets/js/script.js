var trackDate = function() {
    var date = moment().format("dddd, MMMM Do");
    console.log(date);
    document.querySelector("#currentDay").textContent = date;
}

trackDate();