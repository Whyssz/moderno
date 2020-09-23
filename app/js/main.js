$(function () {

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$",
        drag_interval: true,
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1801,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
    $('.upload-select__file, .upload-select, .withdrawals-select').styler();

    $('.icon-th-list').on('click', function () {
        $('.product__item').addClass('list')
        $('.icon-th-large').removeClass('active')
        $('.icon-th-list').addClass('active')
    });

    $('.icon-th-large').on('click', function () {
        $('.product__item').removeClass('list')
        $('.icon-th-list').removeClass('active')
        $('.icon-th-large').addClass('active')
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle()
    });
    let btnCategories = $(".menu__btn");
    let categories = $(".menu__list");
    $(document).mouseup(function (e) {
        if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            ! categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            categories.fadeOut();
        }
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active')
    });

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.products__inner-box');
})