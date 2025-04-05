document
  .getElementById("menuButton")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("mainMenu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      document.addEventListener("click", closeMenuOnClickOutside);
    } else {
      menu.classList.add("hidden");
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
    event.stopPropagation();
  });

function closeMenuOnClickOutside(event) {
  const menu = document.getElementById("mainMenu");
  const menuButton = document.getElementById("menuButton");
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.add("hidden");
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Get the audio element
const hoverSound = document.getElementById("hoverSound");

// Function to play hover sound
function playHoverSound() {
  hoverSound.currentTime = 0; // Reset audio to start
  hoverSound.play().catch((error) => {
    console.error("Error playing hover sound:", error);
  });
}

// Get all nav items
const navItems = document.querySelectorAll(".nav-item");

// Add event listeners to all nav items
navItems.forEach((item) => {
  item.addEventListener("mouseenter", playHoverSound);
});
