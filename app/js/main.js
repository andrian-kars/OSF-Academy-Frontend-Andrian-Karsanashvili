$(function () {

    // drop-down menu
    let dropMain = document.getElementsByClassName('navigation__item');
    let dropChosen = document.getElementsByClassName('chosen-value__item_main');

    for (let i = 0; i < dropMain.length; i++) {
        dropMain[i].addEventListener('mouseenter', showSub, false);
        dropMain[i].addEventListener('mouseleave', hideSub, false);
    }

    for (let i = 0; i < dropChosen.length; i++) {
        dropChosen[i].addEventListener('mouseenter', showSub, false);
        dropChosen[i].addEventListener('mouseleave', hideSub, false);
    }

    function showSub() {
        if (this.children.length > 1) {
            // this.children[1].style.height = 'auto';
            // this.children[1].style.opacity = '1';
            // this.children[1].style.overflow = 'visible';
            this.children[1].style.display = 'flex';
        } else {
            return false;
        }
    }

    function hideSub() {
        if (this.children.length > 1) {
            // this.children[1].style.height = '0';
            // this.children[1].style.opacity = '0';
            // this.children[1].style.overflow = 'hidden';
            this.children[1].style.display = 'none';
        } else {
            return false;
        }
    }





    // Slick Slider
    $('.slider-slick__slider').slick();









});