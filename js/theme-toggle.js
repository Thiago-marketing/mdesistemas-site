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
