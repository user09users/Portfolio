const hamburger = () => {
    const hamburger = document.querySelector('.promo__hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}
export default hamburger;
