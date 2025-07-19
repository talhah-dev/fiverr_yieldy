const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

const languageToggle = document.getElementById('language');
const dropdown = document.getElementById('langDropdown');

languageToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event from bubbling to body
    dropdown.classList.toggle('hidden');
});

// Hide dropdown if clicked outside
document.body.addEventListener('click', () => {
    dropdown.classList.add('hidden');
});

// Optional: Stop propagation if clicking inside dropdown
dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});