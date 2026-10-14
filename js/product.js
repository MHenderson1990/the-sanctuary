/* ════════════════════════════════════
   PRODUCT PAGE — fills #page-product from PRODUCTS
   and handles shareable links like #product/quartz-ring
════════════════════════════════════ */
function openProduct(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) { showPage('shop'); return; }

  const img = document.getElementById('productImage');
  img.src = p.image;
  img.alt = p.name;
  document.getElementById('productCategory').textContent = CATEGORY_LABELS[p.category];
  document.getElementById('productName').textContent = p.name;
  document.getElementById('productPrice').textContent = p.price || 'Custom Order';
  document.getElementById('productDesc').innerHTML = p.description;

  const buy = document.getElementById('productBuy');
  if (p.squareUrl) {
    buy.textContent = 'Add to Cart';
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

window.addEventListener('hashchange', routeFromHash);
routeFromHash();