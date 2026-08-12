
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (btn && links) btn.addEventListener('click', () => links.classList.toggle('show'));
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
