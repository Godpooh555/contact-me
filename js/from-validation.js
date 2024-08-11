document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        // Prevent form submission if validation fails
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const file = document.getElementById('file').files.length;

        let isValid = true;

        // Validate name
        if (name === '') {
            alert('Name is required.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            alert('Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Invalid email format.');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            alert('Message is required.');
            isValid = false;
        }

        // Validate file
        if (file === 0) {
            alert('Please upload an MRI image.');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
