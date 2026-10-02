// VR Designs India - Main Script
document.addEventListener("DOMContentLoaded", () => {
    console.log("VR Designs India Website Loaded Successfully!");

    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header a, nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 2. Team Cards Hover / Interaction Log
    const cards = document.querySelectorAll(".card, .team-card, .member-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease";
        });
    });
});
