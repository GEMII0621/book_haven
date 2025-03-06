function getCart() {
    return sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
}

function updateCartBadge() {
    const cart = getCart();
    const cartCountElements = document.querySelectorAll("#cart-count");
    cartCountElements.forEach(element => {
        element.textContent = cart.length;
    });
}

function showPopup(message) {
    alert(message);
}

function addToCart(event) {
    event.preventDefault();
    const productElement = event.target.closest(".product");
    const productName = productElement.querySelector("p").textContent.trim();
    const productPrice = parseFloat(productElement.querySelector("p:nth-of-type(2)").textContent.replace("Price: $", ""));
    const productImage = productElement.querySelector("img").src;

    let cart = getCart();
    cart.push({name: productName, price: productPrice, image: productImage });

    sessionStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart after adding item:', cart);
    updateCartBadge();
    showPopup(`${productName} has been added to the cart!`);
}

function removeFromCart(itemIndex) {
    let cart = getCart();
    cart.splice(itemIndex, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartBadge();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    if (!cartItemsContainer) return;

    let cart = getCart();
    console.log('Cart before displaying items', cart);
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your Cart is Empty</p>";
        cartTotalElement.textContent = "$0.00";
        return;
    }
    
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px;">
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove Item</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

document.getElementById("empty-cart")?.addEventListener("click", function() {
   sessionStorage.setItem('cart', JSON.stringify([]));
    displayCartItems();
    updateCartBadge();
});

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    if (document.getElementById("cart-items")) {
        displayCartItems();
    }

document.getElementById("view-items").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("cart-modal").style.display = "block";
    displayCartItems();
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("cart-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("cart-modal")) {
        document.getElementById("cart-modal").style.display = "none";
    }
});

const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            const emailInput = document.getElementById("email").value.trim();
            if (!validateEmail(emailInput)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });

});
