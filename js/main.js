// Navbar toggle for mobile
const navToggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.nav-links');

navToggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggler.querySelector('i').classList.toggle('fa-bars');
    navToggler.querySelector('i').classList.toggle('fa-times');
});

// Smooth scrolling for nav links
function setupSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              navToggler.querySelector('i').classList.add('fa-bars');
              navToggler.querySelector('i').classList.remove('fa-times');
          }
      });
  });
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Hero name to navbar animation on scroll (desktop only)
const heroName = document.querySelector('.hero-content .name');
const navBrand = document.querySelector('.nav-brand');

function handleHeroNameScroll() {
  if (window.innerWidth > 768) {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      heroName.classList.add('shrink');
      navBrand.classList.add('fade-in');
    } else {
      heroName.classList.remove('shrink');
      navBrand.classList.remove('fade-in');
    }
  } else {
    // Always show nav-brand on mobile
    navBrand.classList.add('fade-in');
  }
}

// Initialize all scripts on DOMContentLoaded
function init() {
  setupSmoothScroll();
  handleHeroNameScroll();
  window.addEventListener('scroll', handleHeroNameScroll);
  window.addEventListener('resize', handleHeroNameScroll);
}
document.addEventListener('DOMContentLoaded', init); 