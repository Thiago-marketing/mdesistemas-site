document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = btn.querySelector(".icon");
  const label = btn.querySelector(".label");

  // Ler do localStorage
  const saved = localStorage.getItem("mde-theme");
  if (saved === "dark") {
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
  }

  function sync() {
    const dark = body.classList.contains("theme-dark");
    icon.textContent = dark ? "☀️" : "🌙";
    label.textContent = dark ? "Modo claro" : "Modo escuro";
  }

  sync();

  btn.addEventListener("click", () => {
    const dark = body.classList.toggle("theme-dark");
    body.classList.toggle("theme-light", !dark);
    localStorage.setItem("mde-theme", dark ? "dark" : "light");
    sync();
  });
});
