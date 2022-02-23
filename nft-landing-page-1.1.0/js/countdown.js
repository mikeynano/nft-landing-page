//Countdown Timer
const clockdiv = document.getElementById("countdown");
const countDownTime = new Date(
  clockdiv.getAttribute("data-date")
).getTime();

const countdownfunction = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);

  if (diff < 0) {
    clockdiv.style.display = "none";
    clearInterval(countdownfunction);
  } else {
    clockdiv.querySelector(".days").innerHTML = days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
  }
}, 1000);

var randomnumber = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;

$(document).ready(function(){

  setTimeout(function(){
    $('body').addClass('loaded');
  }, randomnumber);
});
