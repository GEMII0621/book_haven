document.addEventListener("DOMContentLoaded", function () {

  const searchForms = document.querySelectorAll(".form-table form");
    searchForms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchInput = form.querySelector("input[type='text']");
            const searchValue = searchInput.value.trim();

if (searchValue === "") {
                alert("Please enter a search term.");
                return;
            }

            alert(`Form Successfully Submitted!`);
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
