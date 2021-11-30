const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

const date = document.querySelector("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
