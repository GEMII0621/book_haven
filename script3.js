document.addEventListener('DOMContentLoaded', function() {

    const forms = document.querySelectorAll('.form form');
    forms.forEach(form => {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const amounts = form.querySelectorAll('input[type="number"]');
        const submitButtons = form.querySelectorAl('input[type="submit"]');

        submitButtons.forEach((submitButton, index) => {
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                
                    let valid = true;
                    checkboxes.forEach((checkbox, index) => {
                        const amount = amounts[index];
                        if (checkbox.checked && (!amount.value || isNaN(amount.value) || Number(amount.value) <= 0)) {
                            valid = false;
                            amount.classList.add('error')
                        } else {
                            amount.classList.remove('error');
                        }
                    });
    
                    if (!valid) {
                       alert("Please check at least one box and enter a donation amount for at least one Organization!");
                    } else{
                         alert("Thank you for making a donation, and helping our community learn to read!");
                        form.submit();
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
