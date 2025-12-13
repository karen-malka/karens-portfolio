const page = $("#page").data("page");

$(document).ready(function () {
  const hash = window.location.hash;

  if (hash) {
    const $target = $(hash);
    if ($target.length) {
      $(window).scrollTop(0);
      $("html, body").animate({ scrollTop: $target.offset().top - 100 }, 1000);
    }
  }
});

$("#home-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top - 100,
    },
    1000
  );
});

$("#projects-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top - 100,
    },
    1000
  );
});

$("#designs-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#designs").offset().top - 100,
    },
    1000
  );
});

$("#websites-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#websites").offset().top - 100,
    },
    1000
  );
});

$("#prototypes-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#prototypes").offset().top - 100,
    },
    1000
  );
});

$("#photographs-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#photographs").offset().top - 100,
    },
    1000
  );
});

$("#art-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#art").offset().top - 100,
    },
    1000
  );
});

$("#flyers-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#flyers").offset().top - 100,
    },
    1000
  );
});

$("#about-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 100,
    },
    1000
  );
});
