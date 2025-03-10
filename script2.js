document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formQ").addEventListener("submit", function(event) {
        var fullname = document.getElementById("fullname").value.trim();
        var email = document.getElementById("qccemail").value.trim();
        var phone = document.getElementById("pnumber").value.trim();
        var message = document.getElementById("comments").value.trim();
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
          localStorage.setItem("formQData", JSON.stringify({fullname, email, phone, message }));
          alert(`Form Successfully Submitted!`);
        }
    });

    document.getElementById("clearFormButton").addEventListener("click", function() {
        document.getElementById("formQ").reset();
        localStorage.removeItem("formQData");

    const savedData = JSON.parse(localStorage.getItem("formQData"));
    if (savedData) {
        document.getElementById("fullname").value = savedData.fullname;
        document.getElementById("qccemail").value = savedData.email;
        document.getElementById("pnumber").value = savedData.phone;
        document.getElementById("message").value = savedData.message;
    }
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
