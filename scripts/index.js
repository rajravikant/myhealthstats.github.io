const nav_header = document.querySelector("header");
const mobile_nav = document.querySelector(".mobile-nav-bar");
const nav_bar_links = document.querySelectorAll("navbar-links");
const btn_lrn = document.querySelector(".btn-learn");

const redirectToMyAccount = () => {
  window.open("../pages/myaccount.html");
};

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  
};

mobile_nav.addEventListener("click",()=> toggleNavbar());
btn_lrn.addEventListener("click", () => redirectToMyAccount());

//sticky navbar
const section_info = document.querySelector(".section-info");

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

observer.observe(section_info);
//end sticky nav bar

var typed = new Typed("#element", {
  strings: [
    "FIT",
    "HEALTHY",
    "CONSISTENT",
    "DEDICATED",
    "FOCUSED",
    "PASSIONATE",
    "FIT"
  ],
  typeSpeed: 80,
});

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
  typeSpeed: 30,
});



