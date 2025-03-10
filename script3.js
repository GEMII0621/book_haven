document.addEventListener('DOMContentLoaded', function() {

    const forms = document.querySelectorAll('.form form');
    forms.forEach(form => {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const amounts = form.querySelectorAll('input[type="number"]');
        const submitButton = form.querySelector('input[type="submit"]');

        if (submitButton)
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                    let isValid = false;
                    checkboxes.forEach((checkbox, index) => {
                        const amountInput = amounts[index];
                        if (checkbox.checked && amountInput && parsefloat(amountInput.value) > 0) {
                            isValid = true;
                        }
    
                    if (isValid) {
                        alert("Thank you for making a donation, and helping our community learn to read!");
                        form.submit();
                    } else{
                        alert("Please check at least one box and enter a donation amount for at least one Organization!");
                    }
                });
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
);
