const panels = [...document.querySelectorAll('.demo-panel')];
const stepButtons = [...document.querySelectorAll('.steps button')];

function goToStep(step) {
  panels.forEach(panel => panel.classList.toggle('active', panel.dataset.panel === String(step)));
  stepButtons.forEach(button => button.classList.toggle('active', button.dataset.step === String(step)));
  document.querySelector('.demo-shell').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => goToStep(button.dataset.go)));
stepButtons.forEach(button => button.addEventListener('click', () => goToStep(button.dataset.step)));

document.querySelectorAll('.choices button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.choices button').forEach(choice => choice.classList.remove('selected'));
  button.classList.add('selected');
  const score = Number(button.dataset.score);
  document.querySelector('#demo-score').textContent = (2.2 + score * 0.2).toFixed(1);
}));

document.querySelectorAll('.role-grid button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.role-grid button').forEach(role => role.classList.remove('selected'));
  button.classList.add('selected');
  const registrationLink = document.querySelector('#registration-link');
  registrationLink.href = `https://portal.c3cyber.com.au/register?role=${encodeURIComponent(button.dataset.role)}`;
}));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const grid = document.querySelector('.radar .grid');
[1, .75, .5, .25].forEach(scale => {
  const points = [[150,36],[249,93],[249,207],[150,264],[51,207],[51,93]].map(([x,y]) => `${150+(x-150)*scale},${150+(y-150)*scale}`).join(' ');
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', points); grid.appendChild(polygon);
});
document.querySelector('#year').textContent = new Date().getFullYear();
