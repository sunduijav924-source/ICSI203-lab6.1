// Pause marquees on hover (optional nice effect)
document.querySelectorAll(".marquee").forEach(m => {
  m.addEventListener("mouseenter", () => {
    const track = m.querySelector(".marquee-track--full, .marquee-track--text");
    if (track) track.style.animationPlayState = "paused";
  });
  m.addEventListener("mouseleave", () => {
    const track = m.querySelector(".marquee-track--full, .marquee-track--text");
    if (track) track.style.animationPlayState = "running";
  });
});

