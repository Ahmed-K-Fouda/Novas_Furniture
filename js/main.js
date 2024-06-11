/////////// navbar ////////////
const nav = document.getElementById("list-one");
const menu = document.getElementById("show");
const cancel = document.getElementById("hide");
const login = document.getElementById("login");
const loginBtn = document.getElementById("login-button");
const loginCLose = document.getElementById("login-close");
const form = document.getElementById("search-bar");
const searchBtn = document.getElementById("shop-glass");
const searchClose = document.getElementById("search-close");
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length - 1;
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterCard = document.querySelectorAll(".colportfolio");
const btnScroll = document.getElementById("scroll");

menu.addEventListener("click", () => {
  nav.style.cssText = "top:0";
  cancel.style.display = "block";
  menu.style.display = "none";
});
cancel.addEventListener("click", () => {
  nav.style.top = "-1000px";
  cancel.style.display = "none";
  menu.style.display = "block";
});

/////// search //////////

searchBtn.addEventListener("click", () => {
  form.classList.add("show-search");
  form.style.zIndex = "999999";
});

searchClose.addEventListener("click", () => {
  form.classList.remove("show-search");
});

form.addEventListener("click", function () {
  form.classList.remove("show-search");
});

///////// login form

loginBtn.addEventListener("click", () => {
  login.classList.add("show-login");
  login.style.zIndex = "9999999";
});
loginCLose.addEventListener("click", () => {
  login.classList.remove("show-login");
});

login.addEventListener("click", function () {
  login.classList.remove("show-login");
});
////////// slider-testimonials ///////////

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + "%";
  slides.style.transform = `translateX(${translateValue})`;
}

// const filterInfo = document.querySelectorAll(".info-item")
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  filterCard.forEach((colportfolio) => {
    colportfolio.classList.add("hide");
    if (
      colportfolio.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      colportfolio.classList.remove("hide");
    }
  });
};

// console.log(e.target)
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 650) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});
btnScroll.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
