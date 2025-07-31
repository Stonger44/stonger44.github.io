    // Auto-update year in footer
    let yearClasses = document.getElementsByClassName("year");
    Array.from(yearClasses).forEach(element => {
      element.textContent = new Date().getFullYear();
    });

    // Hamburger menu toggle for mobile
    const toggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Typed.js initialization
    document.addEventListener("DOMContentLoaded", () => {
        const phrases = [
          "Game Developer",
          "Unreal Engine Developer",
          "Unity Developer",
          "Software Engineer",
          "C# Developer",
          "Goober",
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