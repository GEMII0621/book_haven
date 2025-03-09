document.addEventListener('DOMContentLoaded', function() {
    const schoolsForm = document.querySelector('#schools');
    const sheltersForm = document.querySelector('#shelters');
    const charitiesForm = document.querySelector('#charities');

    function validateForm(form, checkboxesSelector, amountsSelector) {
        const checkboxes = form.querySelectorAll(checkboxesSelector);
        const amounts = form.querySelectorAll(amountsSelector);

        const isValid = Array.from(checkboxes).some(checkbox => checkbox.checked) &&
                        Array.from(amounts).some(amount => amount.value && parseFloat(amount.value) > 0);

        return isValid;
    }

    function handleFormSubmit(event, form, checkboxesSelector, amountsSelector) {
        event.preventDefault();

        if (validateForm(form, checkboxesSelector, amountsSelector)) {
            alert("Thank you for making a donation, and helping our community learn to read!");
            form.submit();
        } else {
            alert("Please check at least one box and enter a donation amount for at least one Organization!");
        }
    }

    schoolsForm.querySelector('input[type="submit"]').addEventListener('click', function(event) {
        handleFormSubmit(event, schoolsForm, 'input[type="checkbox"]', 'input[type="number"]');
    });

    sheltersForm.querySelector('input[type="submit"]').addEventListener('click', function(event) {
        handleFormSubmit(event, sheltersForm, 'input[type="checkbox"]', 'input[type="number"]');
    });

    charitiesForm.querySelector('input[type="submit"]').addEventListener('click', function(event) {
        handleFormSubmit(event, charitiesForm, 'input[type="checkbox"]', 'input[type="number"]');
    });

    const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function(event) {
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
});