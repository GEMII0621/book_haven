 function getCookies(){
     return document.cookie
        .split("; ")
        .reduce((cookies, cookie) => {
            const [name, value] = cookie.split("=");
             cookies[name] = decodeURIComponent(value);
            return cookies;
        }, {});
 }

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.gettime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.touTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCart() {
    const cookies = getCookies();
    return cookies.cart ? JSON.parse(cookies.cart) : [];
}

function updateCartBadge() {
    const cart = getCart();
    const cartCountElement = document.querySelector(".cart a");
    if (cartCountElement) {
        cartCountElement.textConent = 'View Items (${cart.length})';
    }

    const badge = document.getElementById("cart-badge");
    if (badge) {
        badge.textContent = cart.length;
    }
}

function addToCart(event) {
    event.preventDefault();

    const productElement = event.target.closest(".product");
    const productName = product.Element.querySelector("p").textContent.trim();
    const productPrice = 15.00;
    const = productElement.querySelector(img").src;

    let cart = getCart();
    cart.push({name: productName, price: productPrice, image: productImage });

    setCookie("cart", JSON.stringify(cart), 7);
    updateCartBadge();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;

    let cart = getCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your Cart is Empty</p>";
        return;
    }

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px;">
            <p>$item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove Item</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function removeFromCart(itemIndex) {
    let cart = getCart();
    cart.splice(itemIndex, 1);

    setCookie("cart, JSON.stringify(cart), 7);
    displayCartItems();
    updateCartBadge();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    document.querySelectorAll(".button).forEach(button => {
        button.addEventListener("click", addToCart);
    });

    if (document.getElementById("cart-items")) {
        displayCartItems();
    }

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
