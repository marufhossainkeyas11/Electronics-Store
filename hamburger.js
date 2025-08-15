const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
});
const sBar = document.querySelector('.s_bar input');
const sBtn = document.querySelector('.s_bar button');

function runSearch() {
  if (!sBar.value) return;
  
  sessionStorage.setItem('searchValue', sBar.value);
  sBar.value = '';
  window.location.href = '/Electronics-Store/search.html';
}

sBtn.addEventListener('click', runSearch);

sBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runSearch();
  }
});

if (window.location.pathname === '/Electronics-Store/search.html') {
  const savedValue = sessionStorage.getItem('searchValue');
  if (savedValue) {
    sBar.value = savedValue;
    sessionStorage.setItem('searchValue', '');
  }
}
