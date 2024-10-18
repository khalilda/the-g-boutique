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

    // Load More Functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const hiddenItems = document.querySelectorAll('.hidden');
    const itemsToShow = 3; // How many items to show on each click

    if (loadMoreBtn && hiddenItems.length > 0) {
        loadMoreBtn.addEventListener('click', () => {
            let itemsShown = 0;

            hiddenItems.forEach(item => {
                if (item.classList.contains('hidden') && itemsShown < itemsToShow) {
                    item.classList.remove('hidden');
                    itemsShown++;
                }
            });

            // Check if there are still hidden items
            if (document.querySelectorAll('.hidden').length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    } else {
        console.error('Load More button or hidden items not found.');
    }
        // Language switcher event listener
        const languageOptions = document.querySelector('.language-options');
        const languageSelector = document.querySelector('.language-selector');
    
        if (languageOptions && languageSelector) {
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
        } else {
            console.error('Language options elements not found.');
        }

            // Search Bar Functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            // Implement your search logic here
            console.log('Search query:', query);
            // Example: Filter items based on the query
            const items = document.querySelectorAll('.item');
            items.forEach(item => {
                const itemName = item.textContent.toLowerCase();
                if (itemName.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    } else {
        console.error('Search bar elements not found.');
    }
    
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
            if (content) {
                content.classList.toggle('show');
            } else {
                console.error('Content element not found.');
            }
        });
    });
    });

