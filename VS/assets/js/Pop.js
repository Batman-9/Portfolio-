document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const popMessage = document.getElementById("pop-message");

  // Check if elements exist before adding event listener
  if (form && popMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent form refresh for demo

      popMessage.classList.add("show");

      // Hide after 3 seconds
      setTimeout(() => {
        popMessage.classList.remove("show");
      }, 3000);

      form.reset(); // clear the form
    });
  } else {
    console.error("Form or pop message element not found");
  }
});