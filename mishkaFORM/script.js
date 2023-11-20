document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButton = document.getElementById("toggleButton");

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
    }

    // Toggle between light and dark mode
    toggleButton.addEventListener("click", function () {
      body.classList.toggle("light-mode");
      body.classList.toggle("dark-mode");

      // Save the current theme to localStorage
      const currentTheme = body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
      localStorage.setItem("theme", currentTheme);
    });
  });