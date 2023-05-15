var saveButton = $(".saveBtn");
var currentDay = $("#currentDay")

$(function () {
    var date = dayjs().format('MMMM D YYYY');
    currentDay.text(date);
    var presentTime = dayjs().hour();
    var blockId = $(".time-block");
    blockId.each(function() {
        var hourValue = $(this).attr("id");
        if(presentTime < hourValue) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description future");
        } else if(presentTime > hourValue) {
            $(this).children(".description").attr("class", "col-8 col-md-10 description past");
        } else {
            $(this).children(".description").attr("class", "col-8 col-md-10 description present");
        };
    });

    saveButton.on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".description").val().replace(hour);
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, JSON.stringify(text))
    })

    for(let i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
    }
});