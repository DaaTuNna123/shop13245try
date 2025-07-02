document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideCount = slides.length;
    let interval;
    
    // დავამატოთ სლაიდების პოზიციონირება
    function initSlider() {
        slider.style.width = `${slideCount * 100}%`;
        slides.forEach(slide => {
            slide.style.width = `${100 / slideCount}%`;
        });
    }
    
    function startSlider() {
        interval = setInterval(nextSlide, 3000);
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    function updateSlider() {
        const slideWidth = 100 / slideCount;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
    
    // Pause on hover
    const container = document.querySelector('.slider-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        container.addEventListener('mouseleave', startSlider);
    }
    
    // ინიციალიზაცია
    initSlider();
    startSlider();
})