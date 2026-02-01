// Theme toggle logic
(function() {
  const themeStorageKey = 'fd-theme-preference';
  const lightThemePath = '/assets/css/just-the-docs-default.css';
  const darkThemePath = '/assets/css/just-the-docs-dark.css';

  function getSavedTheme() {
    return localStorage.getItem(themeStorageKey);
  }

  function saveTheme(theme) {
    localStorage.setItem(themeStorageKey, theme);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    const link = document.querySelector('link[rel="stylesheet"][href*="just-the-docs"]');
    if (!link) return;

    const newHref = theme === 'dark' ? darkThemePath : lightThemePath;
    if (link.getAttribute('href') !== newHref) {
      link.setAttribute('href', newHref);
    }
    
    // Update toggle button icon if it exists
    updateToggleIcon(theme);
    
    // Update Scalar theme if present
    updateScalarTheme(theme);
  }

  function updateToggleIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;
    
    // Sun icon for dark mode (click to switch to light), Moon for light mode
    const icon = theme === 'dark' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    
    toggleBtn.innerHTML = icon;
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }

  function updateScalarTheme(theme) {
    // If we map CSS variables correctly, this might happen automatically.
    // But setting the class/attribute on body is a good practice for global overrides.
    document.body.setAttribute('data-theme', theme);
  }

  // Initialize
  const savedTheme = getSavedTheme();
  const initialTheme = savedTheme || 'light'; // Default to light to match current site
  
  // Apply immediately to prevent flash
  setTheme(initialTheme);

  // Expose toggle function globally
  window.toggleTheme = function() {
    const currentHref = document.querySelector('link[rel="stylesheet"][href*="just-the-docs"]').getAttribute('href');
    const isDark = currentHref.includes('dark');
    const newTheme = isDark ? 'light' : 'dark';
    
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  // Wait for DOM to load button
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleIcon(initialTheme);
  });
})();
