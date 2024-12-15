let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Убедитесь, что индекс находится в пределах допустимого диапазона
    currentIndex = (index + totalSlides) % totalSlides;

    // Сдвиньте карусель
    const offset = -currentIndex * (window.innerWidth < 768 ? 100 : 33.33); // Сдвиг на 100% или 33.33%
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}