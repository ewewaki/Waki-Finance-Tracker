export {
  incomeBtn,
  expenseBtn,
  okBtn,
  transactionInput,
  transactionDisplay,
  errorMess,
  incomeDisplay,
  summaryDisplay,
  expenseDisplay,
};

const nav = document.querySelector(".nav");
const sideBar = document.querySelector(".side-bar");
const homeSection = document.querySelector(".home");
const trackerSection = document.querySelector(".tracker");
const overviewSection = document.querySelector(".overview");
const searchSection = document.querySelector(".search");
const homeBtn = document.querySelector(".home-btn");
const trackerBtn = document.querySelector(".tracker-btn");
const searchBtn = document.querySelector(".search-btn");
const overviewBtn = document.querySelector(".overview-btn");
const themeToggle = document.querySelector(".theme-toggle");
// home button
const startBtn = document.querySelector(".start-btn");
//tracker buttons
const transactionDisplay = document.querySelector(".trans-display");
const errorMess = document.querySelector(".errorMess");
const incomeBtn = document.querySelector(".incomeBtn");
const expenseBtn = document.querySelector(".expenseBtn");
const transactionInput = document.querySelector(".transaction-input");
const okBtn = document.querySelector(".ok-btn");
const incomeDisplay = document.querySelector(".incomeDisplay");
const expenseDisplay = document.querySelector(".expenseDisplay");
const summaryDisplay = document.querySelector(".summaryDisplay");

const activePage = (section) => {
  homeSection.classList.add("not-active");
  trackerSection.classList.add("not-active");
  overviewSection.classList.add("not-active");
  searchSection.classList.add("not-active");
  document.querySelector(section).classList.remove("not-active");
};

homeBtn.addEventListener("click", () => activePage(".home"));
startBtn.addEventListener("click", () => activePage(".tracker"));
trackerBtn.addEventListener("click", () => activePage(".tracker"));
searchBtn.addEventListener("click", () => activePage(".search"));
overviewBtn.addEventListener("click", () => activePage(".overview"));

nav.classList.add("dark-theme");
sideBar.classList.add("dark-theme");
themeToggle.classList.add("dark-theme");
homeSection.classList.add("dark-theme");
trackerSection.classList.add("dark-theme");
searchSection.classList.add("dark-theme");
overviewSection.classList.add("dark-theme");
themeToggle.innerHTML = "White Theme";

themeToggle.addEventListener("click", () => {
  if (themeToggle.innerHTML === "Dark Theme") {
    nav.classList.add("dark-theme");
    sideBar.classList.add("dark-theme");
    themeToggle.classList.add("dark-theme");
    homeSection.classList.add("dark-theme");
    trackerSection.classList.add("dark-theme");
    searchSection.classList.add("dark-theme");
    overviewSection.classList.add("dark-theme");
    themeToggle.innerHTML = "White Theme";
  } else {
    nav.classList.remove("dark-theme");
    sideBar.classList.remove("dark-theme");
    themeToggle.classList.remove("dark-theme");
    homeSection.classList.remove("dark-theme");
    trackerSection.classList.remove("dark-theme");
    searchSection.classList.remove("dark-theme");
    overviewSection.classList.remove("dark-theme");
    themeToggle.innerHTML = "Dark Theme";
  }
});
