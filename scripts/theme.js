const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", function () 
{document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {themeBtn.textContent = "🌙 Switch to Light Mode";} 
else {themeBtn.textContent = "☀️ Switch to Dark Mode";}});