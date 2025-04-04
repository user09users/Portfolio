const rating = () => {
    const counters = document.querySelectorAll('.skills__rating-counter');
    const lines = document.querySelectorAll('.skills__rating-lines span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    })
}

export default rating;
