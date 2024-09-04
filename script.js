// Bestsellers Slider
const bestsellersSlider = document.querySelector('.bestsellers-slider');
const bestsellersPrevBtn = document.querySelector('.bestsellers-prev');
const bestsellersNextBtn = document.querySelector('.bestsellers-next');

let scrollAmount = 0;

bestsellersNextBtn.addEventListener('click', () => {
    bestsellersSlider.scrollTo({
        top: 0,
        left: (scrollAmount += bestsellersSlider.clientWidth / 2), // Adjust scroll distance as needed
        behavior: 'smooth'
    });
});

bestsellersPrevBtn.addEventListener('click', () => {
    bestsellersSlider.scrollTo({
        top: 0,
        left: (scrollAmount -= bestsellersSlider.clientWidth / 2),
        behavior: 'smooth'
    });
});

// Brand Slider
const brandSlider = document.querySelector('.brand-slider');
const brandPrevBtn = document.querySelector('.brand-prev');
const brandNextBtn = document.querySelector('.brand-next');

let brandScrollAmount = 0;

brandNextBtn.addEventListener('click', () => {
    brandSlider.scrollTo({
        top: 0,
        left: (brandScrollAmount += brandSlider.clientWidth / 2), // Adjust scroll distance as needed
        behavior: 'smooth'
    });
});

brandPrevBtn.addEventListener('click', () => {
    brandSlider.scrollTo({
        top: 0,
        left: (brandScrollAmount -= brandSlider.clientWidth / 2),
        behavior: 'smooth'
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
