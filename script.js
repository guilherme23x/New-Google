let iconeMenu = document.getElementById("Tooltip");

function menuIcones() {
  iconeMenu.classList.toggle("ativo");
}
function applyTheme(isDark) {
  const body = document.getElementById('alterarTemaBody');
  const main = document.getElementById('alterarTemaMain');
  const section = document.getElementById('alterarTemaSection');
  const icone = document.getElementById('icone');

  if (isDark) {
    body.classList.add('dark');
    main.classList.add('dark');
    section.classList.add('dark');
    icone.classList.add("fa-moon");
  } else {
    body.classList.remove('dark');
    main.classList.remove('dark');
    section.classList.remove('dark');
    icone.classList.remove("fa-moon");
  }
}

function initializeTheme() {
  const currentTheme = localStorage.getItem('theme') === 'dark';
  applyTheme(currentTheme);
}

function ThemeButton() {
  const body = document.getElementById('alterarTemaBody');
  const isDark = body.classList.toggle('dark');

  // Alterna o tema e armazena no LocalStorage
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}