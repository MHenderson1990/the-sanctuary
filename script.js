const poems = {
    rooted: { title:'Rooted', tag:'Healing · Strength', text:`Even trees that bend in the storm\nknow exactly where home is.\n\nTheir roots don't argue with the wind —\nthey simply hold.\n\nI used to think strength meant\nnot bending at all.\n\nNow I know it means\nknowing how to sway\nwithout letting go of the ground.\n\nI am rooted.\nEven when the wind tells me\nI should not be.\n\nEven when the rain\ntries to soften the soil\nbeneath my feet.\n\nI am rooted.\nAnd I am not going anywhere.` },
    quietmoon: { title:'Quiet Moon', tag:'Feminine · Stillness', text:`She doesn't need to be seen\nto be powerful.\n\nThe moon has always known this —\npulling tides from behind clouds,\nmoving oceans without a single sound.\n\nThere is a kind of woman\nwho does not announce herself.\nShe simply arrives,\nand the room rearranges.\n\nYou, too, are the quiet kind.\nThe kind that holds more light\nthan you are willing to show.\n\nLet them wonder.\nLet them look up on dark nights\nand search for what is missing.\n\nYou are not missing.\nYou are just patient.` },
    rising: { title:'Rising', tag:'Growth · Resilience', text:`I did not survive the fire\nto be afraid of sparks.\n\nI am the light now.\nI am the warmth people reach for\nwhen the cold becomes too much.\n\nSurvival taught me this:\nthat what is meant to break you\nsometimes breaks you open —\nwide enough for something holy\nto finally get through.\n\nI used to mourn the version of me\nthat the fire took.\nNow I thank her.\n\nShe was the kindling.\nI am the flame.` },
    flow: { title:'Let It Flow', tag:'Grief · Healing', text:`Grief is just love\nwith nowhere left to go.\n\nSo I let it pour —\nthrough my hands,\nthrough my words,\nthrough the spaces between my ribs\nwhere you used to live.\n\nI don't fight it anymore.\nThe river always finds its way\nto the sea.\n\nAnd the sea doesn't shame the river\nfor arriving the way it does —\nall chaos and current and longing.\n\nIt just opens.\nIt just receives.\n\nI am learning to be the sea\nfor myself.` },
    soft: { title:'Soft & Strong', tag:'Self-love · Empowerment', text:`Softness is not a weakness.\nIt is the bravest armor\nI have ever worn.\n\nAnyone can build walls.\nIt takes real courage\nto stay open —\nto keep choosing tenderness\nwhen the world keeps choosing hard.\n\nI am soft in the way\nthat soil is soft:\ncapable of holding roots,\ncapable of growing things,\ncapable of bringing life\nfrom places that looked like nothing.\n\nDo not mistake my gentleness\nfor an invitation to wound me.\n\nI am soft.\nI am also\nentirely unbreakable.` },
    stars: { title:'Written in Stars', tag:'Spiritual · Purpose', text:`Before you were a name,\nyou were a constellation.\n\nThe sky still remembers you —\nthe exact arrangement of light\nthat agreed to become you,\nto descend and live\nthis particular, precious, impossible life.\n\nYou did not arrive here by accident.\nYou were chosen by stars\nthat had been waiting\nfor exactly the right moment\nto send something like you down.\n\nWhen you feel lost,\nlook up.\n\nNot for answers.\nJust to remember\nthat you and the sky\nare made of the same thing.\n\nAnd the sky\nhas never once been small.` }
  };

  function showPage(page) {
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

  function openPoem(id, showAudio = false) {
    const p = poems[id];
    document.getElementById('modalTag').textContent = p.tag;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalText').textContent = p.text;
    document.getElementById('audioContent').innerHTML = `<p class="audio-placeholder">🎙️ Audio coming soon — Coco will be adding her voice to this poem shortly.</p>`;
    document.getElementById('poemModal').classList.add('open');
  }

  function closePoemModal(e) { if (e.target === document.getElementById('poemModal')) document.getElementById('poemModal').classList.remove('open'); }
  function closePoemModalDirect() { document.getElementById('poemModal').classList.remove('open'); }

  function openBooking(url) { 
  if (url) {
    window.open(url, '_blank');
  } else {
    showPage('services');
  }
}
  function closeBookingModal(e) { if (e.target === document.getElementById('bookingModal')) document.getElementById('bookingModal').classList.remove('open'); }

  function filterShop(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.product-card[data-category]').forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
    });
    const consultForm = document.getElementById('customConsultForm');
    consultForm.style.display = (category === 'custom') ? 'block' : 'none';
  }

  function handleAddToCart(btn) {
    const original = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.style.background = 'var(--dark-sage)';
    setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 2000);
  }

  function handleSmsSignup(e) {
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ You\'re in!';
  btn.disabled = true;
}

  function handleContact(e) {
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.disabled = true;
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

function handleConsultation(event) {
  const btn = event.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Request Sent!';
  btn.disabled = true;
}

  initFadeIns();