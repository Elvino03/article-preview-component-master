const button = document.getElementById("menuBtn");
const info = document.querySelector(".info");
const popup = document.querySelector(".popup");

const button2 = document.getElementById("ogBtn");

button.addEventListener("click", function () {
  info.classList.toggle("hidden");
  popup.classList.toggle("hidden");
});

button2.addEventListener("click", function () {
    info.classList.toggle("hidden");
    popup.classList.toggle("hidden");
});