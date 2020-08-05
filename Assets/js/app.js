const inputCheck = document.getElementById("switch");
const switchLabel = document.getElementById("darkLabel");

const toggleDarkMode = () => {
  document.body.classList.toggle("darkTheme");
  if (document.body.className === "darkTheme") {
    switchLabel.textContent = "Light Mode";
  } else {
    switchLabel.textContent = "Dark Mode";
  }
};

inputCheck.addEventListener("change", toggleDarkMode);
