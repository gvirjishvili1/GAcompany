$(document).ready(function () {
     const searchButton = $("#searchBtn");
     const searchBar = $(".search");
     const $carousel = $('.carousel');
     const $carouselItems = $('.carousel-item');
     const $nextButton = $('#next-button');
     const $prevButton = $('#prev-button');
   
     let currentIndex = 0;

     $("loading-overlay").fadeOut();

     $(searchBar).hide();
     
     $(searchButton).click(function(){
         $(searchBar).toggle();
     }); 
     

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
});