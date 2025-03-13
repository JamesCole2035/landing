document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Инициализация Slick Carousel
        $('.carousel').slick({
            dots: false, // Убираем точки навигации
            infinite: true, // Бесконечная прокрутка
            speed: 300, // Скорость анимации
            slidesToShow: 4, // Количество видимых слайдов
            slidesToScroll: 1, // Количество слайдов для прокрутки
            responsive: [
                {
                    breakpoint: 1024, // Настройки для экранов меньше 1024px
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768, // Настройки для экранов меньше 768px
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480, // Настройки для экранов меньше 480px
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    
        // Плавная прокрутка наверх
        const topButtons = document.querySelectorAll('.top-button');
        topButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    
    });