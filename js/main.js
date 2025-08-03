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

  const hidden = 'hidden';
  const overscrollCoverheight = 'h-40';
  const superOverscrollCoverheight = 'h-80';

  if (atBottom) {
    overscrollCover.classList.remove(hidden);

    if (overscrollAmount > 100) {
      // User is dragging far up (hard overscroll)
      overscrollCover.classList.remove(overscrollCoverheight);
      overscrollCover.classList.add(superOverscrollCoverheight);
    } else {
      // Normal overscroll
      overscrollCover.classList.remove(superOverscrollCoverheight);
      overscrollCover.classList.add(overscrollCoverheight);
    }

  } else {
    // Not at bottom, hide everything
    overscrollCover.classList.add(hidden);
    overscrollCover.classList.remove(overscrollCoverheight, superOverscrollCoverheight);
  }
});
