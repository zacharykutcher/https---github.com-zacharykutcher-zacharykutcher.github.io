/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================ */

// Active Navigation Link
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav();
    setupContactForm();
});

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Contact Form Handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            showFormStatus('Please fill in all fields correctly.', 'error');
            return;
        }

        // Send form via email (using FormSubmit.co - free service)
        sendFormViaEmail(formData);
    });
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.name || !data.email || !data.subject || !data.message) {
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

function sendFormViaEmail(formData) {
    const statusDiv = document.getElementById('formStatus');
    
    // Show loading state
    statusDiv.textContent = 'Sending...';
    statusDiv.className = 'form-status loading';
    
    // Using FormSubmit.co for email handling
    const form = document.getElementById('contactForm');
    const formElement = form;
    
    // Add form submission via fetch
    fetch('https://formspree.io/f/xyzzwkyg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            showFormStatus('Failed to send message. Please try again.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Fallback: show email as alternative
        showFormStatus('Unable to send via form. Please email me directly at zacharykutcher@gmail.com', 'error');
    });
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('formStatus');
    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add scroll spy for navigation (optional enhancement)
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
    });
}

// Toggle mobile menu (if you add mobile menu feature later)
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

// Print resume functionality (for resume.html)
function setupPrintResume() {
    const printBtn = document.querySelector('[data-print]');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

// Page load animations
window.addEventListener('load', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.project-card, .article-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
});

// Add animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
