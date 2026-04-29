// Add this to a new file named "animations.js" or include it in your existing scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .section-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
    `;
    document.head.appendChild(style);

    // Get all sections with IDs (excluding #home which is the header)
    const sections = document.querySelectorAll('section[id]');
    
    // Add animation classes to sections
    sections.forEach((section, index) => {
        if (section.id !== 'home') {
            section.classList.add('section-animate');
            // Add staggered delays
            if (index % 3 === 1) section.classList.add('delay-1');
            if (index % 3 === 2) section.classList.add('delay-2');
        }
    });

    // Function to handle scroll animations
    function handleScrollAnimations() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('section-visible');
            }
        });
    }

    // Initial check on page load
    setTimeout(handleScrollAnimations, 100);
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Also check when user resizes window
    window.addEventListener('resize', handleScrollAnimations);
});