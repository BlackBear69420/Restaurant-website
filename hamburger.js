// JavaScript for hamburger menu toggle
const mobileNavIcon = document.getElementById("mobile-nav-icon");
const mobileNav = document.getElementById("mobile-nav");

mobileNavIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
});

// Close the mobile menu when a menu item is clicked
const mobileNavItems = document.querySelectorAll("#mobile-nav a");
mobileNavItems.forEach((item) => {
    item.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });
});

// Show/hide mobile navigation icon based on screen width
function toggleMobileNavIcon() {
    if (window.innerWidth <= 768) {
        mobileNavIcon.style.display = "flex";
    } else {
        mobileNavIcon.style.display = "none";
        mobileNav.classList.remove("show");
    }
}

// Initial check on page load
toggleMobileNavIcon();

// Listen for window resize events
window.addEventListener("resize", toggleMobileNavIcon);
