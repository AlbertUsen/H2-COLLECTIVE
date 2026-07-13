document.addEventListener("DOMContentLoaded", () => {
  // --- VIDEO LAYER INTEGRITY MANAGEMENT ---
  const heroVideo = document.getElementById("hero-bg-video");
  if (heroVideo) {
    heroVideo.playbackRate = 0.55; // Calibrated slow cinematic background movement speed
    
    // Safety playback confirmation string
    heroVideo.play().catch(err => {
       console.log("Background raw content streaming without blocks.");
    });
  }
});

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });