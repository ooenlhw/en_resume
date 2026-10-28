const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    })
});

const backToTop = document.querySelector('.back-to-top');
const updateBackToTop = () => {
    backToTop.hidden = window.scrollY < 500;
};

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();
