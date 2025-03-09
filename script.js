document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".visit-btn").addEventListener("click", function () {
        alert("Book Haven | 123 Bookstore Rd | Bookstore, SC 12345");
    });

    const searchForms = document.querySelectorAll(".search-section form");
    searchForms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchInputs = form.querySelectorAll("input[type='search']");
            const submitButton = form.querySelector("input[type='submit']");
            const searchTerm = submitButton.value;

            searchInputs.forEach((searchInput) => {
                const searchValue = searchInput.value.trim();
                if (searchValue === "") {
                    alert("Please enter a search term.");
                    event.preventDefault();
                    return;
                }
                alert(`Searching for ${searchTerm}: ${searchValue}`);
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
