document.addEventListener('DOMContentLoaded', function () {
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

    // Check if Swiper is loaded before initializing
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 5,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        console.error('Swiper is not loaded.');
    }

    // Expandable Sections
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Language switcher event listener
    const languageOptions = document.querySelector('.language-options');
    const languageSelector = document.querySelector('.language-selector');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const hiddenItems = document.querySelectorAll('.hidden');
    const itemsToShow = 3; // How many items to show on each click

    languageSelector.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    // Hide language options when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language-selector')) {
            languageOptions.style.display = 'none';
        }
    });

    // Hide language options when a language option is clicked
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            languageOptions.style.display = 'none';
        });
    });

    // Load More Functionality
    if (loadMoreBtn && hiddenItems.length > 0) {
        loadMoreBtn.addEventListener('click', () => {
            let itemsShown = 0;

            hiddenItems.forEach(item => {
                if (item.classList.contains('hidden') && itemsShown < itemsToShow) {
                    item.classList.remove('hidden');
                    itemsShown++;
                }
            });

            // Hide button if all items are shown
            if (document.querySelectorAll('.hidden').length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    } else {
        console.error('Load More button or hidden items not found.');
    }
});