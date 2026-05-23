// infiniteweb - script.js

// mouse-follow glow effect
const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  glow.style.left = x - 175 + "px";
  glow.style.top = y - 175 + "px";
});

// click pulse effect
document.addEventListener("click", (e) => {
  const pulse = document.createElement("div");

  pulse.style.position = "absolute";
  pulse.style.left = e.clientX + "px";
  pulse.style.top = e.clientY + "px";
  pulse.style.width = "10px";
  pulse.style.height = "10px";
  pulse.style.borderRadius = "50%";
  pulse.style.background = "rgba(0, 212, 255, 0.7)";
  pulse.style.transform = "translate(-50%, -50%)";
  pulse.style.animation = "pulse 0.6s ease-out forwards";
  pulse.style.pointerEvents = "none";

  document.body.appendChild(pulse);

  setTimeout(() => {
    pulse.remove();
  }, 600);
});
