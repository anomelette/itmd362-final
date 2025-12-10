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
  const form = document.querySelector("form"); 

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevents page reload
      form.reset();

      // Create popup container
      const popup = document.createElement("div");
      popup.classList.add("popup-notification");
      popup.innerHTML = `
        <p>Thank you! Your form has been submitted.</p>
        <button class="popup-close">Close</button>
      `;
      document.body.appendChild(popup);

      // Close popup on button click
      popup.querySelector(".popup-close").addEventListener("click", () => {
        popup.remove();
      });

      // Auto-remove after 5 seconds
      setTimeout(() => {
        if (popup) popup.remove();
      }, 5000);
    });
  }
});
