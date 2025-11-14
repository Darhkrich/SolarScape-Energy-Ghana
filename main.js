// Perfect Navigation for All Devices
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Mobile Menu Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Toggle menu
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open on mobile
            if (window.innerWidth <= 768) {
                if (navMenu.classList.contains('active')) {
                    body.style.overflow = 'hidden';
                } else {
                    body.style.overflow = '';
                }
            }
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                navMenu.classList.contains('active') &&
                !e.target.closest('.nav-container')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
});



// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    
    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// === ENHANCED CONTACT FORM HANDLING ===

// Add CSS for form errors (keep this at the bottom)
const style = document.createElement('style');
style.textContent = `
    .input-error {
        border-color: var(--primary-color) !important;
        box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1) !important;
    }
`;
document.head.appendChild(style);


let index = 0;
const heroimage = document.querySelectorAll('.heroimage');

setInterval(() => {
  heroimage[index].classList.remove('active');
  index = (index + 1) % heroimage.length;
  heroimage[index].classList.add('active');
}, 3000); // change image every 3 seconds



contactForm.addEventListener('submit', function(e) {
    // validation logic
    const isValid = validateForm();
    
    // Only prevent submission if validation fails
    if (!isValid) {
        e.preventDefault();
    }
    // If validation passes, let Netlify handle the submission
});