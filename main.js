// Menu do celular
const botao = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');
botao.addEventListener('click', () => {
  const aberto = botao.getAttribute('aria-expanded') === 'true';
  botao.setAttribute('aria-expanded', String(!aberto));
  botao.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('aberto', !aberto);
});
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('aberto');
}));

// Fundo no topo depois de rolar
const topo = document.querySelector('.topo');
const marcar = () => topo.classList.toggle('rolou', window.scrollY > 24);
window.addEventListener('scroll', marcar, { passive: true });
marcar();
