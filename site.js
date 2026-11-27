// Acromégalie – common scripts (dark mode + language)
(function () {
  // --- Dark mode ---
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
  }

  window.toggleTheme = function () {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    updateThemeIcon();
  };

  function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Mode clair' : 'Mode sombre');
  }

  // --- Language via Google Translate ---
  window.doTranslate = function (lang) {
    // Create or reuse the Google Translate select
    let select = document.querySelector('.goog-te-combo');
    if (!select) {
      // Inject Google Translate if not present
      if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
      }
      // Wait a bit for the widget
      setTimeout(function () {
        select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event('change'));
        }
      }, 800);
      return;
    }
    select.value = lang;
    select.dispatchEvent(new Event('change'));
  };

  // Init
  document.addEventListener('DOMContentLoaded', function () {
    updateThemeIcon();
  });
})();

// Google Translate init
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'fr',
    includedLanguages: 'en,es,fr',
    autoDisplay: false
  }, 'google_translate_element');
}
