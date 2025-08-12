function cardFtouch(p) {
  p.querySelectorAll('.card').forEach(card => {
    const avail = Number(card.getAttribute('data-available') || 0);
    const sold = Number(card.getAttribute('data-sold') || 0);
    const total = Math.max(avail + sold, 1);
    const percent = Math.round((sold / total) * 100);
    
    const availEl = card.querySelector('.info-available');
    const soldEl = card.querySelector('.info-sold');
    if (availEl) availEl.textContent = avail;
    if (soldEl) soldEl.textContent = sold;
    
    const bar = card.querySelector('.progress-bar > span');
    const note = card.querySelector('.progress-note');
    if (bar) { bar.style.width = percent + '%'; }
    if (note) { note.textContent = percent + '% of stock sold'; }
    
    const addBtn = card.querySelector('.add-cart');
    if (addBtn) {
      if (avail <= 0) {
        addBtn.disabled = true;
        addBtn.style.opacity = '.6';
        addBtn.style.cursor = 'not-allowed';
        addBtn.closest('.card').querySelector('.img-frame').innerHTML += '<div class="badge">Stock Out</div>';
      }
    }
    
    const buyBtn = card.querySelector('.buy-now');
    if (buyBtn) {
      if (avail <= 0) {
        buyBtn.disabled = true;
        buyBtn.style.opacity = '.6';
        buyBtn.style.cursor = 'not-allowed';
        buyBtn.closest('.card').querySelector('.img-frame').innerHTML += '<div class="badge">Stock Out</div>';
      }
    }
  });
  
}

function cardMake(p, product) {
  p.innerHTML += `
      <article class="card" data-available="${product.available}" data-sold="${product.sold}" aria-labelledby="p1-name">
        <div class="img-frame">
          <img src="/Electronics-Store/IMG/${product.ID}.png" alt="${product.name}">
        </div>
        <div class="card-body">
          <div class="meta">
            <div>
              <div class="title" id="p1-name">${product.name}</div>
              <div class="muted" style="margin-top:6px;">${product.description}</div>
            </div>
            <div class="price">৳${product.price.toFixed(2)}</div>
          </div>
          
          <div class="stats" aria-hidden="false">
            <div>Available: <strong class="info-available"></strong></div>
            <div>Sold: <strong class="info-sold"></strong></div>
          </div>
          
          <div class="progress-wrap">
            <div class="progress-bar" aria-hidden="true"><span></span></div>
            <div class="progress-note">— % of stock sold</div>
          </div>
          
          <div class="actions">
            <button class="btn primary add-cart">Add to cart</button>
            <button class="btn ghost buy-now">Buy now</button>
          </div>
          
          <div class="card-footer">
            <div>ID: ${product.ID}</div>
            <div>${product.notice}</div>
          </div>
        </div>
      </article>
     `;
}

