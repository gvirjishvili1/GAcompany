$(document).ready(function () {
    const $carousel = $('.carousel');
    const $carouselItems = $('.carousel-item');
    const $nextButton = $('#next-button');
    const $prevButton = $('#prev-button');

    let currentIndex = 0;

    // Corrected selector for loading overlay
    $(".loading-overlay").fadeOut();

    updateCarousel();

    function updateCarousel() {
        const translateValue = `${-currentIndex * 50}%`;
        $carousel.css('transform', `translateX(${translateValue})`);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % $carouselItems.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + $carouselItems.length) % $carouselItems.length;
        updateCarousel();
    }

    $nextButton.on('click', nextSlide);
    $prevButton.on('click', prevSlide);

    /* search bar */

    $(document).ready(function() {
        const nav = $("nav"),
        searchIcon = $("#searchBtn"),
        searchBar = $(".search-box input");
      
        searchIcon.on("click", function() {
            nav.toggleClass("openSearch");
            nav.removeClass("openNav");
            if (nav.hasClass("openSearch")) {
                searchIcon.removeClass("bi-search").addClass("bi-x");
                $(".bi-x").css("font-size", "32px");
                $(".navbar-links").css("display", "none");
                searchBar.focus();
            } else {
                searchIcon.removeClass("bi-x").addClass("bi-search");
                $(".bi-search").css("font-size", "20px");
                $(".navbar-links").css("display", "flex");
                searchBar.blur();
            }
        });
      
    });
});