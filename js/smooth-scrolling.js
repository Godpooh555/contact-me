document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });
});
