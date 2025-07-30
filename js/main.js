    // Auto-update year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Typed.js initialization
    document.addEventListener("DOMContentLoaded", () => {
      new Typed("#typed-text", {
        strings: [
          "Unreal Engine Enthusiast",
          "Unity Developer",
          "Lover of Game Mechanics",
          "I like my cat!",
          "Coffee Addict",
          "Always Learning"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
      });
    });