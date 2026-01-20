
// ===== CONFETTI WORKING VERSION =====

// find confetti container
const confettiContainer = document.querySelector(".confetti");

// colors
const colors = [
  "#ffec9fff", // yellow
  "#FF9ECF", // pink
  "#C77DFF", // purple
  "#87fe99ff", // green
  "#65d9ffff"  // sky
];

// function to start confetti
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("span");

    // position
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";

    // size
    const size = Math.random() * 10 + 15;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // color
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // speed
    confetti.style.animationDuration =
      Math.random() * 1 + 1 + "s";

    confettiContainer.appendChild(confetti);

    // remove after fall
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// AUTO START when page loads
window.onload = launchConfetti;
function scaleGame() {
  const stage = document.querySelector(".game-stage");
  if (!stage) return;

  const scaleX = window.innerWidth / 1919;
  const scaleY = window.innerHeight / 927;
  const scale = Math.min(scaleX, scaleY);

  stage.style.transform = `scale(${scale})`;
}

window.addEventListener("load", scaleGame);
window.addEventListener("resize", scaleGame);

<script>
  function enterSite() {
    document.getElementById("introVideo").style.display = "none";
  }
</script>



