const nav_header = document.querySelector("header");
const mobile_nav = document.querySelector(".mobile-nav-bar");
const nav_bar_links = document.querySelectorAll("navbar-links");

const btn_signin = document.querySelector(".btn-signup");

const btn_arrow = document.querySelector(".arrow");
const collapseC = document.querySelector(".content-collapsible");

const redirectToMyAccount = () => {
  window.open("../pages/myaccount.html");
};

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

const toggledownarrow = () => {
  collapseC.classList.toggle("hideAccord");
  console.log("cliciked");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

btn_signin.addEventListener("click", () => redirectToMyAccount());
btn_arrow.addEventListener("click", () => toggledownarrow());
//sticky navbar
const section_hero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    ent.isIntersecting == false
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-60px",
    threshold: 0,
  }
);

observer.observe(section_hero);
//end sticky nav bar

// var typed = new Typed("#element", {
//   strings: [
//     "FIT",
//     "HEALTHY",
//     "CONSISTENT",
//     "DEDICATED",
//     "FOCUSED",
//     "PASSIONATE",
//     "FIT",
//   ],
//   typeSpeed: 80,
// });

var typed = new Typed("#element2", {
  strings: [
    "One hour of strength training can burn upto 300 to 400 calories",
    "Muscle Memory helps you to recover quickly from a break",
    "To loose weight adapt caloric defecet",
    "Avoid processed foods",
    "Increase Your Protein",
    "Always Incorporate Strength Training",
    "Take recovery days",
    "Track your workout schedule",
  ],
  typeSpeed: 80,
});


$(document).ready(function(){
$(".counter").counterUp({
  delay:10,time:1200
});
});

