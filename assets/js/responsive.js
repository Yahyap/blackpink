const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const checkbox = document.getElementById("checkbox");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

nav.addEventListener("click", () => {
  checkbox.checked = false;
  nav.classList.remove("slide");
});
