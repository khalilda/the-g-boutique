// Burger Menu
const burgerMenu = document.getElementById('burgerMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
    burgerMenu.style.width = "100%";
});

closeMenu.addEventListener('click', () => {
    burgerMenu.style.width = "0";
});

// Dropdown Menu
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

// Bestsellers Slider
const bestsellersSlider = document.querySelector('.bestsellers-slider');
const bestsellersPrevBtn = document.querySelector('.bestsellers-prev');
const bestsellersNextBtn = document.querySelector('.bestsellers-next');

bestsellersNextBtn.addEventListener('click', () => {
    bestsellersSlider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

bestsellersPrevBtn.addEventListener('click', () => {
    bestsellersSlider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

// Brand Slider
const brandSlider = document.querySelector('.brand-slider');
const brandPrevBtn = document.querySelector('.brand-prev');
const brandNextBtn = document.querySelector('.brand-next');

brandNextBtn.addEventListener('click', () => {
    brandSlider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

brandPrevBtn.addEventListener('click', () => {
    brandSlider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

// Expandable Sections
const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        button.innerHTML = content.style.display === 'block' ? 'Customer Service &#8722;' : 'Customer Service &#43;';
    });
});
