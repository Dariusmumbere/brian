const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
// Select all buttons with the class "collapsible-button"
const collapsibleButtons = document.querySelectorAll(".collapsible-button");

// Loop through all buttons and add a click event listener to toggle content
collapsibleButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle active class to change button style
        this.classList.toggle("active");
        
        // Get the associated content and toggle visibility
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
