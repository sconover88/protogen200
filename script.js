(function () {
  'use strict';

  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  // Restore saved preference (default is 'dark' via HTML attribute)
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    html.dataset.theme = saved;
    updateLabel(saved);
  }

  toggleBtn.addEventListener('click', function () {
    const isDark = html.dataset.theme === 'dark';
    const next = isDark ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateLabel(next);
  });

  function updateLabel(theme) {
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
})();
