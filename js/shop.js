/* ════════════════════════════════════
   SHOP — builds the product grid from PRODUCTS and handles the filter tabs
════════════════════════════════════ */
const CATEGORY_LABELS = {
  crystal: '100% Crystal',
  books: 'Books',
  custom: 'Custom Orders'
};

function renderShopGrid() {
  const grid = document.getElementById('shopGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <a class="product-card product-thumb" href="#product/${p.id}" data-category="${p.category}">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
      <div class="product-info">
        <p class="product-category">${CATEGORY_LABELS[p.category]}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <span class="product-price">${p.price || 'Custom Order'}</span>
        </div>
      </div>
    </a>`).join('');
}

function filterShop(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card[data-category]').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
  });
  const consultForm = document.getElementById('customConsultForm');
  consultForm.style.display = (category === 'custom') ? 'block' : 'none';
}

renderShopGrid();