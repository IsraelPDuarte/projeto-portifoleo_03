const hamburger = document.getElementById("hamburger");
const menus = document.querySelectorAll("#header");

hamburger.addEventListener("click", () => {
  menus.forEach(menu => menu.classList.toggle("active"));
});