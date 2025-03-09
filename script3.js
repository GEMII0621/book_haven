document.addEventListener('DOMContentLoaded', function() {
    
    const forms = document.querySelectorAll('.form form');
    forms.forEach(form => {
        const schoolsCheckboxes = form.querySelectorAll('input[type="checkbox"]');
        const schoolsAmounts = form.querySelectorAll('input[type="number"]');
        const sheltersCheckboxes = form.querySelectorAll('input[type="checkbox"]');
        const sheltersAmounts = form.querySelectorAll('input[type="number"]');
        const charitiesCheckboxes = form.querySelectorAll('input[type="checkbox"]');
        const charitiesAmounts = form.querySelectorAll('input[type="number"]');
        const submitButtons = form.querySelectorAll("input[type='submit']");

        submitButtons.forEach((submitButton, index) => {
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                
                const isSchoolsValid = Array.from(schoolsCheckboxes).some(checkbox=> checkbox.checked);
                                       Array.from(schoolsAmounts).some(amount => amount.value && parseFloat(amount.value) > 0);
                const isSheltersValid = Array.from(sheltersCheckboxes).some(checkbox=> checkbox.checked);
                                        Array.from(sheltersAmounts).some(amount => amount.value && parseFloat(amount.value) > 0);
                const isCharitiesValid = Array.from(charitiesCheckboxes).some(checkbox=> checkbox.checked);
                                         Array.from(charitiesAmounts).some(amount => amount.value && parseFloat(amount.value) > 0);
                      
                if (isSchoolsValid || isSheltersValid || isCharitiesValid) {
                    alert("Thank you for making a donation, and helping our community learn to read!");
                    form.submit();
                } else{
                    alert("Please check at least one box and enter a donation amount for at least one Organization!");
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
