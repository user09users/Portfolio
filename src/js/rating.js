const rating = () => {
    const counters = document.querySelectorAll('.skills__ratings-counter');
    const lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    })
}

export default rating;
