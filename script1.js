document.addEventListener("DOMContentLoaded", function () {
    // Handle the Visit Us button click event
    document.querySelector(".visit-btn").addEventListener("click", function () {
        alert("Book Haven | 123 Bookstore Rd | Bookstore, SC 12345");
    });

    // Handle search functionality
    const searchForms = document.querySelectorAll(".search-section form");
    searchForms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from reloading page
            const searchInput = form.querySelector("input[type='search']");
            const searchValue = searchInput.value.trim();

            if (searchValue === "") {
                alert("Please enter a search term.");
                return;
            }

            alert(`Searching for: ${searchValue}`);
        });
    });

    // Newsletter form validation
    const newsletterForm = document.querySelector(".newsletter form");
    newsletterForm.addEventListener("submit", function (event) {
        const emailInput = document.getElementById("email").value.trim();
        if (!validateEmail(emailInput)) {
            event.preventDefault();
            alert("Please enter a valid email address.");
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Navigation highlight on active page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });
});