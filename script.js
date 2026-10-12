const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
// Código de país de Costa Rica + número local, sin espacios.
const whatsappMessage = 'Hola Castillo, me gustaría cotizar un proyecto.\nTipo de trabajo: \nUbicación: \nMedidas aproximadas: ';
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/50660890679?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
