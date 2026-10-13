// MENÚ MÓVIL
// Estos selectores corresponden al botón y al menú definidos en index.html.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

// Mantener sincronizados el estado accesible del botón y la clase visual del menú.
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

// Abrir o cerrar el menú al tocar el botón.
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});

// Cerrar al elegir una sección, para dejar visible su contenido en celular.
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

// Escape cierra el menú y devuelve el foco al botón para navegación con teclado.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});

// Al pasar al diseño de escritorio, descartar el estado abierto del menú móvil.
// Este punto de cambio debe coincidir con los 760px de styles.css.
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

// PIE DE PÁGINA: actualizar automáticamente el año de copyright.
document.querySelector('#year').textContent = new Date().getFullYear();

// WHATSAPP: editar aquí el mensaje que recibirá Castillo al iniciar una consulta.
// Los saltos de línea dejan espacios para que el cliente complete la información.
const whatsappMessage = 'Hola Castillo, me gustaría cotizar un proyecto.\nTipo de trabajo: \nUbicación: \nMedidas aproximadas: ';

// Aplicar el mismo enlace a todos los elementos marcados con data-whatsapp.
// 506 es el código de Costa Rica; el número se escribe sin espacios.
// encodeURIComponent permite usar tildes, espacios y saltos de línea en la URL.
// Si cambia el teléfono, actualizar también los enlaces de respaldo en index.html.
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/50660890679?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
