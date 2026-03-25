// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('active');
  toggle.setAttribute('aria-expanded', open);
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.about__text, .about__image, .menu__card, .package, .packages__includes, .gallery__item, .contact__inner, .area__towns, .faq__item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Header background on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.borderBottomColor = window.scrollY > 50
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(255,255,255,0.06)';
}, { passive: true });
