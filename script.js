// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });

});


// Contact form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you. Your message has been received.";

    formMessage.style.color = "#087bdc";

    contactForm.reset();

});
