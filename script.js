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


// Language switcher event listener
document.querySelectorAll('#language-switcher a').forEach(langLink => {
    langLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      const selectedLang = this.getAttribute('data-lang');
      loadLanguage(selectedLang); // Load the selected language
    });
  });
  
  // Function to load the appropriate language file
  function loadLanguage(lang) {
    fetch(`${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        // Update the search bar placeholder
        document.getElementById('search-bar').placeholder = translations.searchPlaceholder;
  
        // Update filter and sort labels
        document.querySelector('label[for="filter-select"]').textContent = translations.filterLabel;
        document.querySelector('label[for="sort-select"]').textContent = translations.sortLabel;
  
        // Update item count text
        updateItemCount(5, translations.itemCountText); // Example count
      });
  }
  
  // Update item count text dynamically
  function updateItemCount(count, translation) {
    const itemCountText = translation.replace('{{count}}', count);
    document.getElementById('item-count-text').textContent = itemCountText;
  }
  
  // Initialize with default language (e.g., EN)
  document.addEventListener('DOMContentLoaded', () => {
    loadLanguage('en'); // Load English by default when the page loads
  });
  

  function loadLanguage(lang) {
    // Set direction based on language (RTL for Arabic and Hebrew)
    if (lang === 'ar' || lang === 'he') {
      document.body.setAttribute('dir', 'rtl'); // Right-to-left
    } else {
      document.body.setAttribute('dir', 'ltr'); // Left-to-right
    }
  
    // Fetch and apply the translations
    fetch(`${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        document.getElementById('search-bar').placeholder = translations.searchPlaceholder;
        document.querySelector('label[for="filter-select"]').textContent = translations.filterLabel;
        document.querySelector('label[for="sort-select"]').textContent = translations.sortLabel;
        updateItemCount(5, translations.itemCountText);
      });
  }


  // Save user's language preference in localStorage
function loadLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
  
    // Set direction based on language
    if (lang === 'ar' || lang === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  
    // Fetch translations
    fetch(`${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        document.getElementById('search-bar').placeholder = translations.searchPlaceholder;
        document.querySelector('label[for="filter-select"]').textContent = translations.filterLabel;
        document.querySelector('label[for="sort-select"]').textContent = translations.sortLabel;
        updateItemCount(5, translations.itemCountText);
      });
  }
  
  // Load language on page load from localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    loadLanguage(savedLang);
  });
