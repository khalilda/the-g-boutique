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
    // Check if Swiper is loaded before initializing
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 5,  // Adjust how many images are visible at a time
            spaceBetween: 30,  // Adjust the spacing between images
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        console.error('Swiper is not loaded.');
    }
});

// Expandable Sections
const expandButtons = document.querySelectorAll('.expand-button');
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Language switcher event listener
document.querySelectorAll('.language-option').forEach(langLink => {
    langLink.addEventListener('click', function () {
        const selectedLang = this.textContent.toLowerCase(); // Extract language code (e.g., ar, he, en)
        loadLanguage(selectedLang); // Load the selected language
    });
});

// Function to load the appropriate language file
function loadLanguage(lang) {
    // Save user's language preference in localStorage
    localStorage.setItem('preferredLang', lang);
    
    // Set direction based on language (RTL for Arabic and Hebrew)
    document.body.setAttribute('dir', (lang === 'ar' || lang === 'he') ? 'rtl' : 'ltr');
    
    // Fetch and apply the translations
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            // Update the search bar placeholder
            document.getElementById('search-bar').placeholder = translations.searchPlaceholder;
    
            // Update filter and sort labels
            document.querySelector('label[for="filter-select"]').textContent = translations.filterLabel;
            document.querySelector('label[for="sort-select"]').textContent = translations.sortLabel;
    
            // Update item count text dynamically
            updateItemCount(5, translations.itemCountText); // Assuming 5 items as an example
        })
        .catch(error => {
            console.error(`Error loading language file: ${error}`);
        });
}

// Update item count text dynamically
function updateItemCount(count, translation) {
    const itemCountText = translation.replace('{{count}}', count);
    document.getElementById('item-count-text').textContent = itemCountText;
}

// Load language on page load from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en'; // Default to English
    loadLanguage(savedLang);
});

// Bestsellers Slider Scroll
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.bestsellers-slider');

rightArrow.addEventListener('click', () => {
    slider.scrollBy({ left: slider.clientWidth / 2, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.clientWidth / 2, behavior: 'smooth' });
});

// Basket Modal
const basketIcon = document.querySelector('.basket-icon');
const basketModal = document.getElementById('basketModal');
const closeModal = document.querySelector('.close');

basketIcon.addEventListener('click', () => {
    basketModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    basketModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === basketModal) {
        basketModal.style.display = 'none';
    }
});

// Language Dropdown Toggle
const languageButton = document.querySelector('.language-button');
const languageOptions = document.querySelector('.language-options');

languageButton.addEventListener('click', () => {
    languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-selector')) {
        languageOptions.style.display = 'none';
    }
});

// Hide dropdown after language selection
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
        languageOptions.style.display = 'none'; // Hide dropdown after selection
    });
});
