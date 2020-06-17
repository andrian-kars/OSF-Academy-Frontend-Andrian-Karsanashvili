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
                    slidesToScroll: 1
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

    // ----- (-/+) Button -----
    function incrementValue(valueChanger) {
        valueChanger.preventDefault();
        let fieldName = $(valueChanger.target).data('field');
        let parent = $(valueChanger.target).closest('div');
        let currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (currentVal < 100) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(valueChanger) {
        valueChanger.preventDefault();
        let fieldName = $(valueChanger.target).data('field');
        let parent = $(valueChanger.target).closest('div');
        let currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.counter-button').on('click', '.button-plus', function (valueChanger) {
        incrementValue(valueChanger);
    });

    $('.counter-button').on('click', '.button-minus', function (valueChanger) {
        decrementValue(valueChanger);
    });
    // ----- // (-/+) Button -----

    // ----- PDP Switcher-----
    // Photos
    $('.photo__item-one').on('click', function (photoSwitcher) {
        photoSwitcher.preventDefault;
        $('.photo__item-one').addClass('photo__item_active');
        $('.photo__item-two').removeClass('photo__item_active');
        $('.photo__item-three').removeClass('photo__item_active');
        $('.photo__item-four').removeClass('photo__item_active');
    });

    $('.photo__item-two').on('click', function (photoSwitcher) {
        photoSwitcher.preventDefault;
        $('.photo__item-two').addClass('photo__item_active');
        $('.photo__item-one').removeClass('photo__item_active');
        $('.photo__item-three').removeClass('photo__item_active');
        $('.photo__item-four').removeClass('photo__item_active');
    });

    $('.photo__item-three').on('click', function (photoSwitcher) {
        photoSwitcher.preventDefault;
        $('.photo__item-three').addClass('photo__item_active');
        $('.photo__item-one').removeClass('photo__item_active');
        $('.photo__item-two').removeClass('photo__item_active');
        $('.photo__item-four').removeClass('photo__item_active');
    });

    $('.photo__item-four').on('click', function (photoSwitcher) {
        photoSwitcher.preventDefault;
        $('.photo__item-four').addClass('photo__item_active');
        $('.photo__item-one').removeClass('photo__item_active');
        $('.photo__item-three').removeClass('photo__item_active');
        $('.photo__item-two').removeClass('photo__item_active');
    });

    // Read more
    $('.product-page__paragraph_opener').on('click', function (readMore) {
        readMore.preventDefault;
        $('.product-page__paragraph_hider').toggleClass('product-page__paragraph_hidden');
        $('.product-page__paragraph_opener').toggleClass('product-page__paragraph_hidden');
    });

    // Tabs
    $('.tabs__title_one').on('click', function (tabSwitcher) {
        tabSwitcher.preventDefault;
        $('.tabs__tab_one').addClass('tabs__tab_active');
        $('.tabs__tab_two').removeClass('tabs__tab_active');
        $('.tabs__tab_three').removeClass('tabs__tab_active');
    });

    $('.tabs__title_two').on('click', function (tabSwitcher) {
        tabSwitcher.preventDefault;
        $('.tabs__tab_two').addClass('tabs__tab_active');
        $('.tabs__tab_one').removeClass('tabs__tab_active');
        $('.tabs__tab_three').removeClass('tabs__tab_active');
    });

    $('.tabs__title_three').on('click', function (tabSwitcher) {
        tabSwitcher.preventDefault;
        $('.tabs__tab_three').addClass('tabs__tab_active');
        $('.tabs__tab_one').removeClass('tabs__tab_active');
        $('.tabs__tab_two').removeClass('tabs__tab_active');
    });
    // ----- // PDP Switcher -----

    // ----- Login & Search PopUp -----
    $('.login-cart__icon_login').on('click', function (showLogin) {
        showLogin.preventDefault;
        $('.modal').toggleClass('modal__show');
    });

    $('.login-cart__icon_search').on('click', function (showSearch) {
        showSearch.preventDefault;
        $('.modal-search').toggleClass('modal__show');
    });

    // When the user clicks anywhere outside of the modal, close it
    const modalLogin = document.querySelector('.modal');
    const modalSearch = document.querySelector('.modal-search');
    window.onclick = function (hideLogin) {
        if (hideLogin.target == modalLogin) {
            $('.modal').removeClass('modal__show');
        } else if (hideLogin.target == modalSearch) {
            $('.modal-search').removeClass('modal__show')
        }
    }
    // Show password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
    // ----- // Login & Search PopUp -----




});