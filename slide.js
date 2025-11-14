// Simple Background Image Rotator
document.addEventListener('DOMContentLoaded', function() {
    const bgSlides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    const slideCount = bgSlides.length;
    let rotationInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides
        bgSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Add active class to current slide
        bgSlides[index].classList.add('active');
        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    // Start the rotation (change every 3 seconds)
    function startRotation() {
        rotationInterval = setInterval(nextSlide, 3000);
    }

    // Stop the rotation
    function stopRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }
    }

    // Initialize - show first slide and start rotation
    if (slideCount > 0) {
        showSlide(0);
        startRotation();
        
        // Optional: Pause rotation when hovering over the hero section
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.addEventListener('mouseenter', stopRotation);
            heroBackground.addEventListener('mouseleave', startRotation);
        }
    }
});
    