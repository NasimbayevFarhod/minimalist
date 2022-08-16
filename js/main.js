var elModalOpenButton = document.querySelector(".nav");
var elModalOpenlink = document.querySelector(".navbar");
var elBody = document.querySelector("body")

elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("nav--active");
});

elModalOpenButton.addEventListener("click", function () {
  elModalOpenButton.classList.toggle("close");
});

elModalOpenButton.addEventListener("click", function () {
  elBody.classList.toggle("overflow");
});



