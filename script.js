  function showPage(page) {
    if (page !== 'product' && location.hash) history.replaceState(null, '', location.pathname + location.search);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => a.classList.remove('active'));
    const link = document.querySelector('.nav-links a[data-page="' + page + '"]');
    if (link) link.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
    setTimeout(initFadeIns, 60);
  }

  function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }

  function openBooking(url) { 
  if (url) {
    window.open(url, '_blank');
  } else {
    showPage('services');
  }
}

  function initFadeIns() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.page.active .product-card, .page.active .service-card, .page.active .blog-card, .page.active .poem-card, .page.active .feature-block').forEach(el => {
      el.classList.remove('visible');
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  initFadeIns();