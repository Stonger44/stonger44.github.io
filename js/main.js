// -----Hamburger menu toggle for mobile-----
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const burgerMenuClosedHeight = 'max-h-0';
const burgerMenuOpenHeight = 'max-h-96';
const burgerMenuClosedPadding = 'py-0';
const burgerMenuOpenPadding = 'py-4';

toggle.addEventListener('click', () => {
  const isCollapsed = mobileMenu.classList.contains(burgerMenuClosedHeight);

  mobileMenu.classList.toggle(burgerMenuClosedHeight, !isCollapsed);
  mobileMenu.classList.toggle(burgerMenuOpenHeight, isCollapsed);

  mobileMenu.classList.toggle(burgerMenuClosedPadding, !isCollapsed);
  mobileMenu.classList.toggle(burgerMenuOpenPadding, isCollapsed);
});
// -----Hamburger menu toggle for mobile-----


// -----Listen for window resize to reset mobile menu if needed-----
window.addEventListener('resize', () => {
  // Use the same breakpoint as your mobile menu toggle visibility logic
  if (window.innerWidth >= 839) {
    // Ensure mobile menu is closed
    mobileMenu.classList.add(burgerMenuClosedHeight, burgerMenuClosedPadding);
    mobileMenu.classList.remove(burgerMenuOpenHeight, burgerMenuOpenPadding);
  }
});
// -----Listen for window resize to reset mobile menu if needed-----


// -----Background video loop with crossfade-----
const videos = document.querySelectorAll(".bg-video");
let current = 0;
const fadeOverlap = 2; // seconds before end to start crossfade

videos.forEach((v, i) => {
  // Set slower playback
  v.playbackRate = 0.6;
  
  // Pause all except the first one
  if (i !== 0) {
    v.pause();
  }
});

function scheduleNext(video, index) {
  video.addEventListener("timeupdate", () => {
    if (
      video.duration &&
      video.currentTime >= video.duration - fadeOverlap
    ) {
      video.removeEventListener("timeupdate", arguments.callee);
      playNext(index);
    }
  });
}

function playNext(i) {
  const currentVideo = videos[i];
  const next = (i + 1) % videos.length;
  const nextVideo = videos[next];

  // Prep next video
  nextVideo.currentTime = 0;
  nextVideo.play();

  // Fade
  currentVideo.classList.replace("opacity-100", "opacity-0");
  nextVideo.classList.replace("opacity-0", "opacity-100");

  // When fully invisible, reset current
  setTimeout(() => {
    currentVideo.pause();
  }, 2000); // matches Tailwind transition duration

  current = next;
  scheduleNext(nextVideo, next);
}

// Kick off loop
scheduleNext(videos[current], current);
// -----Background video loop with crossfade-----


// -----Typed.js initialization-----
document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "Game Developer",
      "Unity Developer",
      "C# Developer",
      "Unreal Engine Developer",
      "C++ Developer",
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
// -----Typed.js initialization-----


// -----Auto-update year in footer-----
let yearClasses = document.getElementsByClassName("year");
Array.from(yearClasses).forEach(element => {
  element.textContent = new Date().getFullYear();
});
// -----Auto-update year in footer-----


// -----Black bottom overlay to cover overscroll background-----
const overscrollCover = document.getElementById('overscroll-cover');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Only show overlay when part of footer is onscreen (i.e. during overscroll)
  if (footerRect.top < viewportHeight) {
    overscrollCover.classList.remove('hidden');

    // Cap the overlay to half the visible footer height
    const visibleFooterHeight = viewportHeight - footerRect.top;
    const halfHeight = Math.max(0, visibleFooterHeight * 0.8);

    overscrollCover.style.height = `${halfHeight}px`;
  } else {
    overscrollCover.classList.add('hidden');
    overscrollCover.style.height = '';
  }
});
// -----Black bottom overlay to cover overscroll background-----
