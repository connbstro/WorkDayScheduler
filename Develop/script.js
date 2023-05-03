$(function () {
  timeSlot();
});

// Show current date on page.
function currentDate() {
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd, MMMM D YYYY"));
}

// Time slot function for past, present, future.
function timeSlot() {
  const currentHour = dayjs().hour();
  const timeBlock = $(".time-block");
  timeBlock.each(function () {
    let hour = $(this).attr("id");
    if (hour == currentHour) {
      $(this).addClass("present");
    } else if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour > currentHour) {
      $(this).addClass("future");
    }
  });
}
