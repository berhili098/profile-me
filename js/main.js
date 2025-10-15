// Global variables
let translations = {};
let currentLanguage = 'en';

// Load translations
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        translations = await response.json();
        console.log('✅ Translations loaded successfully', Object.keys(translations));
    } catch (error) {
        console.error('❌ Error loading translations:', error);
    }
}

// Translate text elements
function translatePage(language) {
    console.log('🌐 Translating page to:', language);
    
    if (!translations[language]) {
        console.error('❌ Translation not found for language:', language);
        return;
    }
    
    const elements = document.querySelectorAll('[data-translate]');
    console.log('📄 Found', elements.length, 'translatable elements');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[language], key);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.hasAttribute('content')) {
                element.setAttribute('content', translation);
            } else {
                // Check if element has child nodes with HTML (like icons)
                const hasIconChild = element.querySelector('i');
                
                if (hasIconChild) {
                    // Preserve the icon and only update text
                    const icon = hasIconChild.cloneNode(true);
                    element.textContent = translation + ' ';
                    element.appendChild(icon);
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    const htmlLang = document.getElementById('html-lang');
    if (htmlLang) htmlLang.lang = language;
    
    // Update page title
    if (translations[language] && translations[language].meta) {
        document.title = translations[language].meta.title;
    }
    
    // Update meta tags
    updateMetaTags(language);
}

// Get nested translation value
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

// Update meta tags
function updateMetaTags(language) {
    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (translations[language] && translations[language].meta) {
        const meta = translations[language].meta;
        
        if (metaTitle) metaTitle.setAttribute('content', meta.title);
        if (metaDescription) metaDescription.setAttribute('content', meta.description);
        if (metaKeywords) metaKeywords.setAttribute('content', meta.keywords);
        if (ogTitle) ogTitle.setAttribute('content', meta.title);
        if (ogDescription) ogDescription.setAttribute('content', meta.description);
        if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
        if (twitterDescription) twitterDescription.setAttribute('content', meta.description);
    }
}

// Language switcher functionality
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('🔘 Setting up language switcher, found', langButtons.length, 'buttons');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            console.log('🔄 Language button clicked:', selectedLang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current language
            currentLanguage = selectedLang;
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Translate page
            translatePage(selectedLang);
        });
    });
}

// Initialize language from localStorage or browser preference
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    
    let initialLanguage = 'en'; // default
    
    if (savedLanguage && translations[savedLanguage]) {
        initialLanguage = savedLanguage;
    } else if (translations[browserLanguage]) {
        initialLanguage = browserLanguage;
    }
    
    // Set active button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === initialLanguage) {
            button.classList.add('active');
        }
    });
    
    currentLanguage = initialLanguage;
    translatePage(initialLanguage);
}

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
async function init() {
  // Load translations first
  await loadTranslations();
  
  // Setup language functionality
  setupLanguageSwitcher();
  initializeLanguage();
  
  // Setup other functionality
  setupSmoothScroll();
  handleHeroNameScroll();
  window.addEventListener('scroll', handleHeroNameScroll);
  window.addEventListener('resize', handleHeroNameScroll);
}
document.addEventListener('DOMContentLoaded', init); 