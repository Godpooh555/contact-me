document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const loadingSpinner = document.getElementById('loading-spinner');

    form.addEventListener('submit', function(event) {
        loadingSpinner.style.display = 'block'; // Show spinner
    });
});
