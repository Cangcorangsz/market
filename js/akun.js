const akunButton = document.getElementById("akunButton");
const akun = document.getElementById("akun");
const closeAkun = document.getElementById("closeAkun");
const loginForm = document.querySelector(".akun-form");
const registerForm = document.querySelector(".register-form");
const register = document.getElementById("register");
const loginDisini = document.getElementById("loginDisini");
const mainContainer = document.getElementById("mainContainer");

akunButton.addEventListener("click", function () {
    akun.style.display = "block";
})

closeAkun.addEventListener("click", function () {
    akun.style.display = "none";
})

window.addEventListener("click", function (event) {
    if (event.target == akun) {
        akun.style.display = "none";
    }
})

register.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

loginDisini.addEventListener("click", function() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});