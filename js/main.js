// Navbar toggle for mobile
const navToggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.nav-links');

navToggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggler.querySelector('i').classList.toggle('fa-bars');
    navToggler.querySelector('i').classList.toggle('fa-times');
});

// Smooth scrolling for nav links
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

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear(); 