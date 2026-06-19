function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* typing */
const text = "AI Student | Web Developer | Cyber UI Designer";
let i = 0;

function typing() {
  document.querySelector(".typing").innerHTML = text.slice(0, i);
  i++;
  if (i > text.length) i = 0;
  setTimeout(typing, 120);
}
typing();

/* particles */
const particles = document.querySelector(".particles");

for (let i = 0; i < 30; i++) {
  let span = document.createElement("span");
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 10) + "s";
  particles.appendChild(span);
}