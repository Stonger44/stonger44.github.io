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

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const viewportHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  const atBottom = scrollY + viewportHeight >= fullHeight - 10;
  const overscrollAmount = scrollY + viewportHeight - fullHeight;

  if (atBottom) {
    overscrollCover.classList.remove('hidden');

    if (overscrollAmount > 100) {
      // User is dragging far up (hard overscroll)
      overscrollCover.classList.remove('h-40');
      overscrollCover.classList.add('h-64');
    } else {
      // Normal overscroll
      overscrollCover.classList.remove('h-64');
      overscrollCover.classList.add('h-40');
    }

  } else {
    // Not at bottom, hide everything
    overscrollCover.classList.add('hidden');
    overscrollCover.classList.remove('h-40', 'h-64');
  }
});
