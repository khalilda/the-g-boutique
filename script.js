// Burger Menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const burgerMenu = document.getElementById("burgerMenu");

openMenu.addEventListener("click", () => {
    burgerMenu.style.width = "100%";
});

closeMenu.addEventListener("click", () => {
    burgerMenu.style.width = "0";
});

// Submenu Toggle
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
dropdownBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const submenu = btn.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Swiper (Brand Slider)
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 5,  // Adjust how many images are visible at a time
        spaceBetween: 30,  // Adjust the spacing between images
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Expandable Sections
const expandButtons = document.querySelectorAll('.expand-button');
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
