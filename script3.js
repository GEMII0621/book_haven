document.addEventListener('DOMContentLoaded', function() {

    const donationForms = document.querySelectorAll('.donations-section form');
    donationForms.forEach((form) => {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const amounts = form.querySelectorAll('input[type="number"]');
        const submitButton = form.querySelector('input[type="submit"]');

        if (submitButton) {
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                
                let isChecked = false;
                let isAmountFilled = false;
                checkboxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        isChecked = true;
                    }

                });

                amounts.forEach(amount => {
                    if (parseFloat(amount.value) > 0) {
                        isAmountFilled = true;
                    }
                });

                if (isChecked && isAmountFilled) {
                    alert("Thank you for making a donation, and helping our community learn to read!");
                } else {
                    alert("Please check at least one box and enter a donation amount for at least one Organization!");
                }
            });
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
