const button = document.getElementById("menuBtn");
const button2 = document.getElementById("ogBtn");
const info = document.querySelector(".info");
const popup = document.querySelector(".popup");

function togglePopup() {
  const isDesktop = window.innerWidth >= 768;

  popup.classList.toggle("hidden");

  // Only hide/show info on mobile
  if (!isDesktop) {
    info.classList.toggle("hidden");
  }
}

button.addEventListener("click", togglePopup);

if (button2) {
  button2.addEventListener("click", togglePopup);
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    info.classList.remove("hidden");
    popup.classList.add("hidden");
  }
});

document.addEventListener("click", function (e) {
  const isClickInside = popup.contains(e.target) || button.contains(e.target);

  if (!isClickInside) {
    popup.classList.add("hidden");
    info.classList.remove("hidden");
  }
});