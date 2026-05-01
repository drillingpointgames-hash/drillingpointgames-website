  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      const site = document.getElementById('site');
      loader.classList.add('hidden');
      setTimeout(() => {
        site.classList.add('visible');
        loader.style.display = 'none';
      }, 800);
    }, 3200);
  });

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });