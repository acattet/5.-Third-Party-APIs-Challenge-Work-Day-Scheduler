// Display the current day's date

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);



    
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();


        // time block loops

        $(".time-block").each(function () {

            var blockTime = parseInt($(this).attr("id").split("hour")[1]);


            // change colors based on time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }



$(document).ready(function () {
    // saveBtn listener 
    $(".saveBtn").on("click", function () {

     // link description class with hour id
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");


    // Save text to local storage
    localStorage.setItem(time, text);
    })
   


    // saved local storage items
    
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})