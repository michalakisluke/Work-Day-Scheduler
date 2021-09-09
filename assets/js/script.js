var date = moment().format("dddd, MMMM Do");
document.querySelector("#currentDay").textContent = date;

for (i = 0; i < 24; i++) {
    //Create rows ---> I think done
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    document.querySelector(".container").appendChild(row);

    // Create time element ---> Not done!
    var time = document.createElement("div");
    time.setAttribute("class", "hour");
    time.textContent = moment().format('LT');
    row.appendChild(time);

    // create work to do element
    var work = document.createElement("form");
    work.setAttribute("class", "time-block");
    var workText = document.createElement("textarea");
    workText.setAttribute("class", "description");
    work.appendChild(workText);
    row.appendChild(work);

    // create save button element
    var save = document.createElement("button");
    save.setAttribute("class", "saveBtn");
    var saveText = document.createElement("i");
    saveText.TextContent = "Save";
    save.appendChild(saveText);
    row.appendChild(save);


}
