document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('header');
    const changePoint = 50; // Pixels from top where the background color changes

    window.addEventListener('scroll', () => {
        if (window.scrollY > changePoint) {
            // navbar.style.backgroundColor = 'var(--light-secondary)';
            navbar.classList.add('scroll-active');
        } else {
            navbar.classList.remove('scroll-active');
        }
    });
});
