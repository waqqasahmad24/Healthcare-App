document.addEventListener("DOMContentLoaded", () => {
    // Select the hamburger and nav elements
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    if (hamburger && nav) {
        // Toggle the active class on click
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });
        
        // Close menu when a link is clicked
        const navLinks = nav.querySelectorAll("ul li a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                nav.classList.remove("active");
            });
        });
    }
});
