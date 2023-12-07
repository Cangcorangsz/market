// Nav > keranjang
const keranjang = document.getElementById("keranjang");
const keranjangBtn = document.getElementById("keranjangBtn");
const span = document.getElementsByClassName("close")[0];
const addToCartButtons = document.querySelectorAll(".addToCart");
const cartItems = document.getElementById("cartItems")
const toastBox = document.getElementById("toastBox");


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

    showToast(`<i class="fa-solid fa-cart-shopping"></i> ${productName} telah ditambahkan ke keranjang`);

    addToCartList(productId, productName);
}

// Show Toast Notifaction 

function showToast(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 2000)
}

// addToCartList Function
function addToCartList(productId, productName) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p>${productName} (ID: ${productId})<p> <i class="fa-solid fa-trash-can deleteList"></i>`;
    cartItems.appendChild(listItem);

    // Menambahkan event listener ke deleteList pada listItem yang baru dibuat
    const deleteListItem = listItem.querySelector('.deleteList');
    deleteListItem.addEventListener('click', function () {
        listItem.remove(); // Menghapus listItem saat deleteList di-klik
    });
}