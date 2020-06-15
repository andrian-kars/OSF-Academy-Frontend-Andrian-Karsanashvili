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

    $('.menu-btn').on('click', function (mobileMenu) {
        mobileMenu.preventDefault;
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
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // ----- // Slick Slider -----

    // ----- Current Year -----
    new Date().getFullYear();
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // ----- // Current Year -----

    // ----- Hide Filter Categoty Page -----
    $('.filter-hide').on('click', function (hideFilter) {
        hideFilter.preventDefault;
        $('.filter').toggleClass('filter_display-none');
    });
    // ----- // Hide Filter Categoty Page -----

    // ----- AJAX Request-----
    let productContainer = document.getElementById('loaded-products');
    let btn = document.getElementById('btn-main');
    let count = 0;

    btn.addEventListener('click', function () {
        let productRequest = new XMLHttpRequest();
        productRequest.open('GET', 'https://gist.githubusercontent.com/pmAndrian/4a40670d9296f44c85d4bda448ea115f/raw/f608a0a86c72827765e3e418948aedb73ec3e902/data.json');
        productRequest.onload = function () {
            let productData = JSON.parse(productRequest.responseText);
            renderHTML(productData);
        };
        productRequest.send();
    })

    function renderHTML(data) {
        let start = count > 0 ? 4 * count : count;
        let end = start + 4;
        let htmlString = '';

        for (i = start; i < end; i++) {
            htmlString += '<div class="col-12 col-md-6 col-xl-3 products__item">' +
                '<div class="products__photo products__photo_' + data[i].photoCounter + '">' +
                '<div class="products__hover"> <button class="products__button"><i class="fa fa-plus" aria-hidden="true"></i></button> <button class="products__button"><i class="fa fa-heart" aria-hidden="true"></i></button> </div>' +
                '</div>' +
                '<div class="products__description">' +
                '<div class="products__name">' + data[i].title + '</div>' +
                '<div class="products__price">' + data[i].price + '</div>' +
                '</div>' +
                '</div>';
        }
        count++;
        if (start >= data.length - 4) {
            btn.classList.add('products__load-more_hide');
        }
        productContainer.insertAdjacentHTML('beforeend', htmlString);
    }













    // ----- // AJAX Request -----
});