// // Get the modal
// var log = document.getElementById("log");
// var sign = document.getElementById("sign");
// var logclose = document.getElementById("log-close");
// var signclose = document.getElementById("sign-close");

// // Get the button that opens the modal
// var signbtn = document.getElementById("signBtn");
// var logbtn = document.getElementById("logBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// window.addEventListener("popstate", detectHistory);

// function orlog() {
//   sign.style.display = "none";
//   log.style.display = "block";
// }
// function orsign() {
//   sign.style.display = "block";
//   log.style.display = "none";
// }
// // When the user clicks the button, open the modal
// logbtn.onclick = function () {
//   log.style.display = "block";
//   // window.history.pushState({ id: 1 }, null, "q=1234&u=beware");
// };
// signbtn.onclick = function () {
//   sign.style.display = "block";
//   // window.history.pushState({ id: 1 }, null, "q=1234&u=beware");
// };

// // When the user clicks on <span> (x), close the modal
// logclose.onclick = function () {
//   log.style.display = "none";
//   // history.back();
// };
// signclose.onclick = function () {
//   sign.style.display = "none";
//   // history.back();
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == sign) {
//     sign.style.display = "none";
//     // history.back();
//   }
//   if (event.target == log) {
//     log.style.display = "none";
//     // history.back();
//   }
// };

// function detectHistory() {
//   sign.style.display = "none";
//   log.style.display = "none";
// }

// var query = document.getElementsByClassName("query-asked");

// for (var i = 0; i < 4; i++) {
//   query[i].addEventListener("click", function () {
//     // for (var j = 0; j < 4; j++) {
//     //   query[j].find(".query-ans").fadeOut();
//     // }
//     $(".query-asked > .query-ans")
//       .not($(this).children(".query-ans"))
//       .fadeOut();
//     $(".query-asked > button")
//       .not($(this).children("button"))
//       .removeClass("button-border");
//     $(".query-asked > button>.minus")
//       .not($(this).children("button").children(".minus"))
//       .hide();
//     $(".query-asked > button> .plus")
//       .not($(this).children("button").children(".plus"))
//       .show();
//     $(".query-asked").not(this).removeClass("active-query", 500);
//     $(this).children(".query-asked button").toggleClass("button-border");
//     var min = $(this).children(".query-asked button").children(".minus");
//     var plu = $(this).children(".query-asked button").children(".plus");
//     min.toggle();
//     plu.toggle();
//     var divToSlide = jQuery(this).children(".query-ans");
//     divToSlide.fadeToggle();
//     $(this).toggleClass("active-query", 500);
//   });
// }

// countdown
var countDownDate = new Date("Aug 8, 2022 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("days").innerHTML = days;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("seconds").innerHTML = "D!";
    document.getElementById("minutes").innerHTML = "RE";
    document.getElementById("hours").innerHTML = "PI";
    document.getElementById("days").innerHTML = "EX";
  }
}, 1000);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0";
    } else {
      content.style.padding = "2rem 4rem";
      content.style.maxHeight = content.scrollHeight + "rem";
    }
  });
}
