$(function () {
    // ----- Menu Button -----
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $('.navigation').toggleClass('navigation_active');
    });
    // ----- // Menu Button -----

    // ----- Slick Slider -----
    $('.slider-slick__slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        appendArrows: $('.slider-slick__arrows'),
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.products__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
    });
    // ----- // Slick Slider -----

    // ----- Current Year -----
    new Date().getFullYear();
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // ----- // Current Year -----



});