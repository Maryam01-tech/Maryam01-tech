const toggleIcon = document.querySelector('.toggle-icon ');

toggleIcon.addEventListener('click',() => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

/* Smooth navigation */
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Highlight active navigation link */
const pageSections = document.querySelectorAll(
    '#home, #about, #skills, #experience, #acheivements, #contact'
);

window.addEventListener('scroll', () => {
    let current = 'home';

    // Keep the last section whose top has crossed the header offset active.
    pageSections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 180) {
            current = section.id;
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + current
        );
    });
});

/* Contact form demonstration */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        document.getElementById('form-status').textContent =
            'Please connect an email service to send your message.';

        document.getElementById('form-status').style.color =
            'var(--main-color)';
    });
}
