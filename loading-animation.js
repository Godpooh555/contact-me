document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const spinner = document.getElementById('loading-spinner');

    form.addEventListener('submit', function(event) {
        spinner.style.display = 'block';

        const submitButton = form.querySelector('button');
        submitButton.disabled = true;
      
        setTimeout(() => {
         
            submitButton.disabled = false;
        }, 3000);
    });
});
