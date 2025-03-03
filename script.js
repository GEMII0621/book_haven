function getCookies(){
     return document.cookie ? document.cookie.split("; ").reduce((cookies, cookie) => {
            const [name, value] = cookie.split("=");
            cookies[name] = decodeURIComponent(value);
            return cookies;
        }, {}) : {};
 }

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCart() {
    const cookies = getCookies();
    return cookies.cart ? JSON.parse(cookies.cart) : [];
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".visit-btn").addEventListener("click", function () {
        alert("Book Haven | 123 Bookstore Rd | Bookstore, SC 12345");
    });

const searchForms = document.querySelectorAll(".search-section form");
    searchForms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchInput = form.querySelector("input[type='search']");
            const searchValue = searchInput.value.trim();

if (searchValue === "") {
                alert("Please enter a search term.");
                return;
            }

            alert(`Searching for: ${searchValue}`);
        });
    });

    const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            const emailInput = document.getElementById("email").value.trim();
            if (!validateEmail(emailInput)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            } else {
                alert("Thank you for signing up for our Newletter!");
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
