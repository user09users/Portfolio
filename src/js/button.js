const button = () => {
    const buttons = document.querySelectorAll('.promo__link');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('btn__promo_active'));
            button.classList.add('btn__promo_active')

        })
    })

}

export default button;