// Hamburger menu toggle for mobile
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  const isCollapsed = mobileMenu.classList.contains('max-h-0');

  mobileMenu.classList.toggle('max-h-0', !isCollapsed);
  mobileMenu.classList.toggle('max-h-96', isCollapsed);

  mobileMenu.classList.toggle('py-0', !isCollapsed);
  mobileMenu.classList.toggle('py-4', isCollapsed);
});

// Typed.js initialization
document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "Game Developer",
      "Unreal Engine Developer",
      "Unity Developer",
      "C# Developer",
      "Software Engineer",
      "I play video games",
      "I make video games",
    ];
  new Typed("#typed-text", {
    strings: phrases,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });
});

// Auto-update year in footer
let yearClasses = document.getElementsByClassName("year");
Array.from(yearClasses).forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Black bottom overlay to cover overscroll background
const overscrollCover = document.getElementById('overscroll-cover');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const viewportHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  const atBottom = scrollY + viewportHeight >= fullHeight - 10;

  if (atBottom) {
    const footerRect = footer.getBoundingClientRect();
    const footerVisibleHeight = viewportHeight - footerRect.top;
    const footerVisibleHalfHeight = Math.max(0, footerVisibleHeight / 2);

    overscrollCover.classList.remove('hidden');
    overscrollCover.style.height = `${footerVisibleHalfHeight}px`;
  } else {
    overscrollCover.classList.add('hidden');
    overscrollCover.style.height = '';
  }
});
