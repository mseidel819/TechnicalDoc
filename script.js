"use strict";
const nav = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
console.log("hello");
