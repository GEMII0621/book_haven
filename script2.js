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
    document.getElementById("formQ").addEventListener("submit", function(event) {
        var fullname = document.getElementById("fullname").value.trim();
        var email = document.getElementById("qccemail").value.trim();
        var phone = document.getElementById("pnumber").value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonePattern = /^\d{10}$/;
    
        if (fullname === "") {
           alert("Please enter a name.");
          event.preventDefault();
        } else if (email === "") {
           alert("Please enter a valid email address.");
          event.preventDefault();
        } else if (!emailPattern.test(email)) {
           alert("Please enter a valid email address.");
          event.preventDefault();
        } else if (phone === "") {
          alert("Please enter a phone number.");
          event.preventDefault();
        } else if (!phonePattern.test(phone)) {
           alert("Please enter a valid 10-digit phone number.");
          event.preventDefault();
        } else {
          alert(`Form Successfully Submitted!`);
        }
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
            alert("Thank you for signing up for our Newsletter!");
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
