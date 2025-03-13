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
    
        // Инициализация карты
        // function initMap() {
        //     const location = { lat: 55.7558, lng: 37.6176 }; // Координаты для Москвы
        //     const map = new google.maps.Map(document.getElementById('map'), {
        //         zoom: 10,
        //         center: location
        //     });
        //     const marker = new google.maps.Marker({
        //         position: location,
        //         map: map
        //     });
        // }
    
        // window.initMap = initMap;
    });













    // // Плавная прокрутка наверх
    // const topButtons = document.querySelectorAll('.top-button');
    // topButtons.forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     });
    // });
    // Карусель
    // let currentIndex = 0;
    // const carouselInner = document.querySelector('.carousel-inner');
    // const items = document.querySelectorAll('.carousel-item');
    // const totalItems = items.length;

    // function moveCarousel(direction) {
    //     const itemsPerScreen = getItemsPerScreen();
    //     currentIndex = (currentIndex + direction + totalItems) % totalItems;

    //     // Ограничиваем currentIndex, чтобы не выходить за пределы
    //     if (currentIndex < 0) currentIndex = totalItems - itemsPerScreen;
    //     if (currentIndex > totalItems - itemsPerScreen) currentIndex = 0;

    //     const offset = -currentIndex * (100 / itemsPerScreen);
    //     carouselInner.style.transform = `translateX(${offset}%)`;
    // }

    // function getItemsPerScreen() {
    //     if (window.innerWidth <= 480) return 1;
    //     if (window.innerWidth <= 768) return 2;
    //     if (window.innerWidth <= 1024) return 3;
    //     return 5;
    // }

    // window.addEventListener('resize', () => {
    //     const itemsPerScreen = getItemsPerScreen();
    //     if (currentIndex > totalItems - itemsPerScreen) {
    //         currentIndex = Math.max(0, totalItems - itemsPerScreen);
    //     }
    //     const offset = -currentIndex * (100 / itemsPerScreen);
    //     carouselInner.style.transform = `translateX(${offset}%)`;
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const burgerMenu = document.getElementById('burger-menu');
    //     const navLinks = document.getElementById('nav-links');
    
    //     burgerMenu.addEventListener('click', function() {
    //         navLinks.classList.toggle('active');
    //     });
    
    //     // Плавная прокрутка наверх
    //     const topButtons = document.querySelectorAll('.top-button');
    //     topButtons.forEach(button => {
    //         button.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             window.scrollTo({
    //                 top: 0,
    //                 behavior: 'smooth'
    //             });
    //         });
    //     });
    
    //     // Карусель
    //     let currentIndex = 0;
    //     const carouselInner = document.querySelector('.carousel-inner');
    //     const items = document.querySelectorAll('.carousel-item');
    //     const totalItems = items.length;
    
    //     function moveCarousel(direction) {
    //         const itemsPerScreen = getItemsPerScreen();
    //         currentIndex += direction;
    
    //         // Ограничиваем currentIndex, чтобы не выходить за пределы
    //         if (currentIndex < 0) {
    //             currentIndex = totalItems - itemsPerScreen;
    //         } else if (currentIndex > totalItems - itemsPerScreen) {
    //             currentIndex = 0;
    //         }
    
    //         const offset = -currentIndex * (100 / itemsPerScreen);
    //         carouselInner.style.transform = `translateX(${offset}%)`;
    //     }
    
    //     function getItemsPerScreen() {
    //         if (window.innerWidth <= 480) return 1;
    //         if (window.innerWidth <= 768) return 2;
    //         if (window.innerWidth <= 1024) return 3;
    //         return 5;
    //     }
    
    //     window.addEventListener('resize', () => {
    //         const itemsPerScreen = getItemsPerScreen();
    //         if (currentIndex > totalItems - itemsPerScreen) {
    //             currentIndex = Math.max(0, totalItems - itemsPerScreen);
    //         }
    //         const offset = -currentIndex * (100 / itemsPerScreen);
    //         carouselInner.style.transform = `translateX(${offset}%)`;
    //     });
    
        // Инициализация карты
//         function initMap() {
//             const location = { lat: 55.7558, lng: 37.6176 }; // Координаты для Москвы
//             const map = new google.maps.Map(document.getElementById('map'), {
//                 zoom: 10,
//                 center: location
//             });
//             const marker = new google.maps.Marker({
//                 position: location,
//                 map: map
//             });
//         }
    
//         window.initMap = initMap;
//     });




    
    


//     // Инициализация карты
//     function initMap() {
//         const location = { lat: 55.7558, lng: 37.6176 }; // Координаты для Москвы
//         const map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 10,
//             center: location
//         });
//         const marker = new google.maps.Marker({
//             position: location,
//             map: map
//         });
//     }

//     window.initMap = initMap;
// });