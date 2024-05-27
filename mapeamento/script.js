let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    currentSlide = index;
    const offset = -index * 12;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    if (currentSlide == slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 3000);
