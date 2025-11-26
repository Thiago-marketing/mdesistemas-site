document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const body = document.body;
  const icon = toggle.querySelector(".icon");
  const label = toggle.querySelector(".label");

  const saved = localStorage.getItem("mde-theme");
  if (saved === "dark") body.classList.replace("theme-light", "theme-dark");

  function sync() {
    const dark = body.classList.contains("theme-dark");
    icon.textContent = dark ? "☀️" : "🌙";
    label.textContent = dark ? "Modo claro" : "Modo escuro";
  }

  sync();

  toggle.addEventListener("click", () => {
    const dark = body.classList.toggle("theme-dark");
    if (!dark) body.classList.add("theme-light");
    localStorage.setItem("mde-theme", dark ? "dark" : "light");
    sync();
  });
});
// theme-toggle.js
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-light");

  btn.querySelector(".icon").textContent =
    document.body.classList.contains("theme-dark") ? "☀️" : "🌙";

  btn.querySelector(".label").textContent =
    document.body.classList.contains("theme-dark")
      ? "Modo claro"
      : "Modo escuro";
});
