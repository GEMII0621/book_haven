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

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
  
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
          const checkboxes = form.querySelectorAll('input[type="checkbox"]');
          const amounts = form.querySelectorAll('input[type="number"]');
          let isChecked = false;
          let isAmountFilled = false;
  
          checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                isChecked = true;
              }
          });
  
          amounts.forEach(amount => {
            if (amount.value && parseFloat(amount.value) > 0) {
                isAmountFilled = true;
              }
          });
  
          if (isChecked && isAmountFilled) {
              alert("Thank you for making a donation, and helping our community learn to read!");
          } else{
              event.preventDefault():
              alert("Please check at least one box and enter a dobation amount for at least one Organization!");
          }
      });
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
  });

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
