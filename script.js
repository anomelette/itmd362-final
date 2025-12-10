// INTERACTION 1: Sale pop-up message
window.addEventListener("load", () => {
    const isHomePage = window.location.pathname.endsWith("index.html") ||
                       window.location.pathname === "/" ||
                       window.location.pathname === "";

    if (isHomePage) {
        setTimeout(() => {
            alert("🎉 Limited Time Offer! Enjoy 50% off all used books this week!");
        }, 2000);
    }
});

// INTERACTION 2: Form Submission Confirmation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // grabs the first form
    const popup = document.getElementById("form-popup");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // prevent page reload
            popup.style.display = "block"; // show popup
            form.reset();
        });
    }
});

function closePopup() {
    const popup = document.getElementById("form-popup");
    popup.style.display = "none"; // hide popup
}
