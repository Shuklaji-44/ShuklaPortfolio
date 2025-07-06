// Hamburger menu toggle
function toggleMenu() {
  const menuLinks = document.querySelector("#hamburger-nav .menu-links");
  menuLinks.classList.toggle("active");
}

// (Optional) Close menu when clicking outside or pressing ESC
document.addEventListener('click', (e) => {
  const menu = document.querySelector("#hamburger-nav .menu-links");
  const hamburger = document.querySelector(".hamburger-icon");
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("active");
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelector("#hamburger-nav .menu-links").classList.remove("active");
  }
});
