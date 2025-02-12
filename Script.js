$(document).ready(function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".slide");
        slides.hide();
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides.eq(slideIndex - 1).fadeIn(800);
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
});