const akunButton = document.getElementById("akunButton");
const akun = document.getElementById("akun");
const closeAkun = document.getElementById("closeAkun");

akunButton.addEventListener("click", function () {
    akun.style.display = "block";
})

closeAkun.addEventListener("click", function(){
    akun.style.display = "none";
})

window.addEventListener("click", function(event) {
    if (event.target == akun) {
        akun.style.display = "none";
    }
})