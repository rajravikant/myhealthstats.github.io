const singup_link = document.querySelector("#register_new");
const singin_link = document.querySelector("#login-click");

const register_sec = document.querySelector(".signup-container");
const login_sec = document.querySelector(".signin-container");

toggleSignUp = () =>{
    register_sec.classList.add("active");
    login_sec.classList.remove("active");
};

toggleSignIn = () =>{
    register_sec.classList.remove("active");
    login_sec.classList.add("active");
};


singup_link.addEventListener("click",() => toggleSignUp() );
singin_link.addEventListener("click",() => toggleSignIn() );





