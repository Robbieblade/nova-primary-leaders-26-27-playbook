// scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// mobile menu
const burger = document.querySelector('.burger');
const mob = document.querySelector('.mob-menu');
if (burger && mob) burger.addEventListener('click', () => mob.classList.toggle('open'));
