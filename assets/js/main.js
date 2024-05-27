
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('body.home header')) {
        const navbar = document.querySelector('body.home header');

        const changePoint = 50; // Pixels from top where the background color changes

        window.addEventListener('scroll', () => {
            if (window.scrollY > changePoint) {
                // navbar.style.backgroundColor = 'var(--light-secondary)';
                navbar.classList.add('scroll-active');
            } else {
                navbar.classList.remove('scroll-active');
            }
        });
    }
});
// document.addEventListener('DOMContentLoaded', () => {
//     if (document.querySelector('.product-details')) {
//         const productDetails = document.querySelector('body.home header');

//         const changePoint = 400; // Pixels from top where the background color changes

//         window.addEventListener('scroll', () => {
//             if (window.scrollY > changePoint) {

//                 productDetails.classList.add('scroll-active');
//             } else {
//                 productDetails.classList.remove('scroll-active');
//             }
//         });
//     }
// });



let paragraphs = document.querySelectorAll('.title-background p');
let counter = paragraphs.length;
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style = `animation-delay:${counter / 20}s`;
    counter--;
}
//