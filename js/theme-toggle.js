document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  const icon = toggleBtn?.querySelector(".theme-toggle-icon");
  const label = toggleBtn?.querySelector(".theme-toggle-label");
  const body = document.body;

  // aplica tema salvo
  const saved = localStorage.getItem("mde-theme");
  if (saved === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  }

  function syncLabel() {
    const isDark = body.classList.contains("theme-dark");
    if (!icon || !label) return;
    icon.textContent = isDark ? "☀️" : "🌙";
    label.textContent = isDark ? "Modo claro" : "Modo escuro";
  }

  syncLabel();

  toggleBtn?.addEventListener("click", () => {
    const isDark = body.classList.toggle("theme-dark");
    if (!isDark) {
      body.classList.add("theme-light");
    } else {
      body.classList.remove("theme-light");
    }
    localStorage.setItem("mde-theme", isDark ? "dark" : "light");
    syncLabel();
  });
});
