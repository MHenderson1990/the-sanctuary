/* ════════════════════════════════════
   PRODUCT PAGE — fills #page-product from PRODUCTS
   and handles shareable links like #product/quartz-ring
════════════════════════════════════ */
function openProduct(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) { showPage('shop'); return; }

  renderGallery(p);
  document.getElementById('productCategory').textContent = p.category === 'custom' ? '' : CATEGORY_LABELS[p.category];
  document.getElementById('productName').textContent = p.name;
  document.getElementById('productPrice').textContent = p.price || 'Inquire for pricing';
  document.getElementById('productDesc').innerHTML = p.description;

  const buy = document.getElementById('productBuy');
  if (p.squareUrl) {
    buy.textContent = p.buyLabel || 'Add to Cart';
    buy.onclick = () => window.open(p.squareUrl, '_blank');
  } else {
    buy.textContent = 'Inquire';
    buy.onclick = inquireCustom;
  }

  showPage('product');
}

// Custom pieces: jump to the Custom Orders tab and scroll to the consultation form
function inquireCustom() {
  showPage('shop');
  filterShop('custom', document.querySelector('.filter-btn[onclick*=custom]'));
  showCustomForm('consult', document.querySelector('.custom-toggle-btn'));
  setTimeout(() => {
    document.getElementById('customConsultForm').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

// Reads the URL: #product/<id> opens that product; leaving it returns to the shop
function routeFromHash() {
  const match = location.hash.match(/^#product\/(.+)$/);
  if (match) {
    openProduct(match[1]);
  } else if (document.getElementById('page-product').classList.contains('active')) {
    showPage('shop');
  }
}

// ── Photo gallery: main photo on the left, clickable thumbnail strip above the button ──
function renderGallery(p) {
  const photos = (p.images && p.images.length) ? p.images : [p.image];
  setMainPhoto(photos[0], p.name);

  const thumbs = document.getElementById('productThumbs');
  thumbs.hidden = photos.length < 2;   // no strip for single-photo products
  thumbs.innerHTML = photos.map((src, i) => `
    <button class="gallery-thumb${i === 0 ? ' active' : ''}" aria-label="View photo ${i + 1}"
      onclick="selectThumb(this, '${src}')">
      <img src="${src}" alt="" loading="lazy" />
    </button>`).join('');
  thumbs.scrollLeft = 0;
}

function setMainPhoto(src, name) {
  const img = document.getElementById('productImage');
  img.src = src;
  if (name) img.alt = name;
}

function selectThumb(btn, src) {
  setMainPhoto(src);
  document.querySelectorAll('.gallery-thumb').forEach(b => b.classList.toggle('active', b === btn));
}

window.addEventListener('hashchange', routeFromHash);
routeFromHash();