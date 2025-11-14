// NEW MOBILE NAVIGATION JS
document.addEventListener('DOMContentLoaded', function() {
    const mobileTrigger = document.querySelector('.mobile-nav-trigger');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileClose = document.querySelector('.mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Only run on mobile devices
    if (window.innerWidth <= 768) {
        // Open mobile nav
        if (mobileTrigger && mobileOverlay) {
            mobileTrigger.addEventListener('click', function() {
                mobileOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            });
        }
        
        // Close mobile nav
        if (mobileClose && mobileOverlay) {
            mobileClose.addEventListener('click', function() {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            });
        }
        
        // Close mobile nav when clicking links
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            });
        });
        
        // Close mobile nav when clicking outside content
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', function(e) {
                if (e.target === mobileOverlay) {
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scroll
                }
            });
        }
    }
});