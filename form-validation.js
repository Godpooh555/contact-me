document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let file = document.getElementById('file').files[0];

    if (name === "" || email === "" || message === "" || !file) {
        alert("Please fill out all fields and upload an image.");
        event.preventDefault(); // Prevent form submission
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
