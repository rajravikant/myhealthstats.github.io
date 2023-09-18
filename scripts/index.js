const nav_header = document.querySelector("header");
const mobile_nav = document.querySelectorAll("mobile-nav-icon");
const nav_bar_links = document.querySelectorAll("navbar-links");
const btn_lrn = document.querySelector(".btn-learn");




const redirectToMyAccount = () => {
    window.open("../pages/myaccount.html");
};

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

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




