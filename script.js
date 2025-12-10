// INTERACTION 1: Sale pop-up message
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("🎉 Limited Time Offer! Enjoy 50% off all used books this week!");
    }, 5000); // show popup 5 seconds after page loads
});

// INTERACTION 2: Form Submission Confirmation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // grabs the first form on the page

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // prevents page reload
            alert("Thank you! Your form has been submitted.");
            form.reset();
        });
    }
});
