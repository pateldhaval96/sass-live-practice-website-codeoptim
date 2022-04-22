jQuery(".slider-main").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
});

$(document).ready(function() {
    $(".toogler-icon").click(function() {
        $(".header_main__sub ul").slideToggle("slow");
    });

});



// $(document).ready(function() {
//     $(".toogler-icon").click(function() {
//         $(".header_main__sub ul").addClass("active-menu");
//     });
//     $(".toogler-icon").click(function() {
//         $(".header_main__sub ul").removeClass("active-menu");
//     });
// });

// $(document).ready(function() {
//     $(".toogler-icon").click(function() {
//         $(".header_main__sub ul").css("display", "block");
//     });
// });