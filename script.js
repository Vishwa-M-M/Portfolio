// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Get the target section
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to check validation

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    // Basic email format check
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, submit the form
    alert('Form submitted successfully!');
    form.reset(); // Clear the form after submission
});

// Dynamic Date in Footer
const footerYear = document.querySelector('#footer-year');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = currentYear;
