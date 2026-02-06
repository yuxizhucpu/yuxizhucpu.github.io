(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  function toggle() {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  btn?.addEventListener("click", toggle);
})();
