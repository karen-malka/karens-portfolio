const page = $("#page").data("page");

$(document).ready(function () {
  const hash = window.location.hash; // e.g. "#projects"

  if (hash) {
    const $target = $(hash);
    if ($target.length) {
      $(window).scrollTop(0);
      $("html, body").animate({ scrollTop: $target.offset().top - 100 }, 1000);
    }
  }
});

$("#waterford").click(function () {
  window.open("https://karen-malka.github.io/research-at-waterford/", "_blank");
});

$("#artalcove").click(function () {
  window.open("http://4300showcase.infosci.cornell.edu:5229/", "_blank");
});

$("#applefest").click(function () {
  window.open("https://karen-malka.github.io/apple-fest/", "_blank");
});

$("#home-button").click(function () {
  if (page == "index.html") {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1000
    );
  } else {
    window.location.href = "index.html";
  }
});

$("#projects-button").click(function () {
  if (page == "index.html") {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "index.html#projects";
  }
});
