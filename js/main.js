    // Auto-update year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

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