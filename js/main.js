// Global Interactions for EliteJob Portal

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Management ---
  const themeToggle = document.getElementById('themeToggle');
  const body = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Set initial theme
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
    } else {
      icon.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) lucide.createIcons();
  }

  // --- Lucide Icons ---
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, section h2, .hero h1').forEach(el => {
    observer.observe(el);
  });

  // Active Link Highlighting based on URL
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').replace('..', '').replace('./', '');
    if (currentPath.includes(href) && href !== '') {
      link.classList.add('active');
    }
  });
});

// Global Interactions for EliteJob Portal

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Management ---
  const themeToggle = document.getElementById('themeToggle');
  const body = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Set initial theme
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    // Lucide replaces <i> with <svg>, so we search for the data-lucide attribute instead
    const icon = themeToggle.querySelector('[data-lucide]');
    if (icon) {
      if (theme === 'dark') {
        icon.setAttribute('data-lucide', 'sun');
      } else {
        icon.setAttribute('data-lucide', 'moon');
      }
      if (window.lucide) lucide.createIcons();
    }
  }

  // --- Toast Notification System ---
  function showToast(message, iconName = 'check-circle') {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
    if (window.lucide) lucide.createIcons();

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // --- Button Handlers ---
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .btn');
    if (!target) return;

    const text = target.innerText.trim();

    // Skip theme toggle (handled by ID-specific listener)
    if (target.id === 'themeToggle' || target.closest('#themeToggle')) return;

    // Apply Now buttons
    if (text === 'Apply Now') {
      showToast('Application sent to recruiters!');
      return;
    }

    // Post a Job button
    if (text === 'Post a Job') {
      showToast('Opening Employer Hub...', 'external-link');
      return;
    }

    // Preparation Hub Buttons
    const prepActions = ['Start Learning', 'View Notes', 'Practice Now', 'Explore'];
    if (prepActions.includes(text)) {
      showToast(`Loading ${text.split(' ').pop()} resources...`, 'loader');
      return;
    }

    // Category Filters
    if (target.classList.contains('category-btn')) {
      showToast(`Filtering results for: ${text}`, 'filter');
      return;
    }

    // View Process (Company page)
    if (text === 'View Process') {
      const card = target.closest('.card');
      if (card) card.click();
      return;
    }
  });

  // --- Lucide Icons ---
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, section h2, .hero h1').forEach(el => {
    observer.observe(el);
  });

  // Active Link Highlighting based on URL
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Clean up href for comparison
    const cleanHref = href.split('/').pop().replace('.html', '') || 'index';
    const cleanPath = currentPath.split('/').pop().replace('.html', '') || 'index';

    if (cleanPath === cleanHref) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
