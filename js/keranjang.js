// Nav > keranjang
const keranjang = document.getElementById("keranjang");
const keranjangBtn = document.getElementById("keranjangBtn");
const span = document.getElementsByClassName("close")[0];
const addToCartButtons = document.querySelectorAll(".addToCart");
const cartItems = document.getElementById("cartItems")

// Nav > keranjang
keranjangBtn.onclick = function () {
    keranjang.style.display = "block";
}

span.onclick = function () {
    keranjang.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == keranjang) {
        keranjang.style.display = "none";
    }
}

// Add to cart

document.addEventListener("DOMContentLoaded", function () {
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });
});

// AddToCart function
function addToCart(event) {
    const card = event.target.closest(".card");
    const productId = card.dataset.id;
    const productName = card.dataset.name;
    console.log(`${productName} (ID: ${productId}) Added to cart`)

    addToCartList(productId, productName);
}

// addToCartList Function
function addToCartList(productId, productName) {
    const listItem = document.createElement("li");
    listItem.textContent = `${productName} (ID: ${productId})`;
    cartItems.appendChild(listItem);
}