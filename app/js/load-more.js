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