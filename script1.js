 function getCart() {
    try {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        return Array.isArray(cart) ? cart : [];
    } catch (e) {
        return [];
    }
}

function updateCartBadge() {
    let cart = getCart();
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll("#cart-count").forEach(element => {
        element.textContent = totalItems;
    });
}

function showPopup(message) {
    alert(message);
}

function addToCart(event) {
    event.preventDefault();
    const productElement = event.target.closest(".product");
    const productId = productElement.dataset.id;
    const productName = productElement.querySelector("p").textContent.trim();
    const productPrice = parseFloat(productElement.querySelector("p:nth-of-type(2)").textContent.replace("Price: $", ""));
    const productImage = productElement.querySelector("img").src;

    let cart = getCart();
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showPopup(`${productName} has been added to the cart!`);
    displayCartItems();
}

function removeFromCart(itemIndex) {
    let cart = getCart();
    const productName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartBadge();
    showPopup(`${productName} has been removed from the cart!`);
}

function updateCartItemQuantity(index,newQuantity) {
    let cart = getCart ();
    if(cart[index]) {
      if (newQuantity <= 0){
         removeFromCart(index);
      } else {
          cart[index].quantity = newQuantity;
         sessionStorage.setItem('cart', JSON.stringyfy(cart));
         displayCartItems();
         updateCartBadge();
      }
   }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    if (!cartItemsContainer) return;

    let cart = getCart();
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
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove Item</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function processOrder() {
    let cart = getCart();
    if (cart.length === 0) {
        showPopup("No item(s) in the cart.")
        return;
    }
    sessionStorage.setItem('cart', JSON.stringify([]));
    displayCartItems();
    updateCartBadge();
    showPopup("Thank you for your purchase.");
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    displayCartItems();

document.querySelectorAll("add-to-cart, .button").forEach(button => {
    button.addEventListener("click", addToCart);
});

document.getElementById("empty-cart")?.addEventListener("click", () => {
    const cart = getCart();
    sessionStorage.setItem('cart', JSON.stringify([]));
    displayCartItems();
    updateCartBadge(); 
    if (cart.length === 0) {
        showPopup("No item(s) in the cart.");
    } else  {
        showPopup("Item(s) removed from the cart.");
    }
});


document.getElementById("view-items").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("cart-modal").style.display = "block";
    displayCartItems();
});

document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("cart-modal")) {
        document.getElementById("cart-modal").style.display = "none";
    }
});

document.getElementById("checkout")?.addEventListener("click", function() {
    processOrder();
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
