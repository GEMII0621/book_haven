document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".visit-btn").addEventListener("click", function () {
        alert("Book Haven | 123 Bookstore Rd | Bookstore, SC 12345");
    });

    const searchForms = document.querySelectorAll(".search-section form");
    searchForms.forEach((form) => {
        const searchInputs = form.querySelectorAll("input[type='search']");
        const submitButtons = form.querySelectorAll("input[type='submit']");

        submitButtons.forEach((submitButton, index) => {
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                const searchInput = searchInputs[index];
                const searchValue = searchInput.value.trim();
                    
                if (searchValue === "") {
                    alert("Please enter a search term.");
                    return;
                } else {
                    alert(`Searching for ${submitButton.value}: ${searchValue}`);
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
