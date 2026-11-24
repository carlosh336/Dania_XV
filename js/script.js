/* =====================================================
   CONFIGURACIÓN — edita solo estas líneas
   ===================================================== */
// Archivo de música (dentro de la carpeta audio/). Déjalo vacío para ocultar la música.
const MUSIC_SRC = 'audio/here-comes-the-sun.mp3';  // The Beatles — Here Comes The Sun
// WhatsApp que recibe las confirmaciones, con lada de país. Ej. México: '52' + 10 dígitos. Vacío = solo muestra el mensaje.
const RSVP_WHATSAPP = '527711291686';
// Enlace de Google Maps del Salón Rivento (reemplaza por el enlace exacto del salón).
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Salón Rivento');
// Fecha y hora de la ceremonia (zona centro de México, UTC-6).
const EVENT_DATE = '2027-01-09T19:00:00-06:00';
/* ===================================================== */

document.getElementById('mapBtn').href = MAPS_URL;
if (!MUSIC_SRC) document.body.classList.add('no-music');

// ---------- reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- cuenta regresiva ----------
const target = new Date(EVENT_DATE).getTime();
const pad = n => String(n).padStart(2, '0');
function tick() {
  let diff = Math.max(0, target - Date.now());
  document.getElementById('cd-d').textContent = pad(Math.floor(diff / 86400000));
  document.getElementById('cd-h').textContent = pad(Math.floor(diff % 86400000 / 3600000));
  document.getElementById('cd-m').textContent = pad(Math.floor(diff % 3600000 / 60000));
  document.getElementById('cd-s').textContent = pad(Math.floor(diff % 60000 / 1000));
}
tick(); setInterval(tick, 1000);

// ---------- galería / lightbox ----------
const figs = Array.from(document.querySelectorAll('.pola'));
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let lbIdx = 0;
function showLb(i) {
  lbIdx = (i + figs.length) % figs.length;
  const img = figs[lbIdx].querySelector('img');
  lbImg.src = img.src; lbImg.alt = img.alt;
}
figs.forEach((f, i) => f.addEventListener('click', () => { showLb(i); lb.classList.add('open'); }));
document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
document.getElementById('lbPrev').addEventListener('click', () => showLb(lbIdx - 1));
document.getElementById('lbNext').addEventListener('click', () => showLb(lbIdx + 1));
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lb.classList.remove('open');
  if (e.key === 'ArrowLeft') showLb(lbIdx - 1);
  if (e.key === 'ArrowRight') showLb(lbIdx + 1);
});

// ---------- confirmar asistencia ----------
const yes = document.getElementById('rsvpYes');
const no = document.getElementById('rsvpNo');
const msg = document.getElementById('rsvpMsg');
function rsvp(text, shown, activeBtn, otherBtn) {
  activeBtn.classList.add('active'); otherBtn.classList.remove('active');
  msg.textContent = shown; msg.classList.add('show');
  if (RSVP_WHATSAPP) window.open('https://wa.me/' + RSVP_WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
}
yes.addEventListener('click', () => rsvp('Hola, confirmo mi asistencia a los XV años de Dania el 9 de enero de 2027. ¡Ahí estaré!', '¡Gracias por acompañarme, nos vemos en la pista!', yes, no));
no.addEventListener('click', () => rsvp('Hola, lamento informar que no podré asistir a los XV años de Dania el 9 de enero de 2027.', 'Te vamos a extrañar. Gracias por avisar.', no, yes));

// ---------- música (archivo local) ----------
const vinylBtn = document.getElementById('vinylBtn');
const vinylText = document.getElementById('vinylText');
const fab = document.getElementById('musicFab');
let isPlaying = false;
const audio = new Audio();
audio.loop = true;
audio.preload = 'auto';
if (MUSIC_SRC) audio.src = MUSIC_SRC;

audio.addEventListener('play',  () => { isPlaying = true;  syncMusic(); });
audio.addEventListener('pause', () => { isPlaying = false; syncMusic(); });
function syncMusic() {
  vinylBtn.classList.toggle('spin', isPlaying);
  fab.classList.toggle('paused', !isPlaying);
  vinylText.textContent = isPlaying ? 'Pausar música' : 'Toca el disco para escuchar';
}
function toggleMusic() {
  if (!MUSIC_SRC) return;
  if (isPlaying) audio.pause();
  else audio.play().catch(() => {});
}
vinylBtn.addEventListener('click', toggleMusic);
fab.addEventListener('click', toggleMusic);

// ---------- sobre de inicio ----------
const splash = document.getElementById('splash');
const envelope = document.getElementById('envelope');
let opened = false;
function openInvitation() {
  if (opened) return; opened = true;
  envelope.classList.add('open');
  toggleMusic();                       // el clic en el sobre es el gesto que permite iniciar la música
  setTimeout(() => {
    splash.classList.add('hide');
    document.body.classList.remove('locked');
    document.body.classList.add('started');
  }, 1700);
}
envelope.addEventListener('click', openInvitation);
