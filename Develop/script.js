// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Function to show current date on page.
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd, MMMM D YYYY"));

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

  timeSlot();
});
