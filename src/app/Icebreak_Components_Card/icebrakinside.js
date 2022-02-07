var carouselEl = $(".owl-carousel");

carouselEl.owlCarousel({
  items: 6,
});

$(".my-next-button").click(function () {
  carouselEl.trigger("next.owl.carousel");
});

$(".my-previous-button").click(function () {
  carouselEl.trigger("prev.owl.carousel");
});
