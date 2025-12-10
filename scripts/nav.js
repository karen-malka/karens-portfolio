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
  window.location.href = "projects.html";
});

$("#websites-button").click(function () {
  if (page == "projects.html") {
    $("html, body").animate(
      {
        scrollTop: $("#websites").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "projects.html#websites";
  }
});

$("#prototypes-button").click(function () {
  if (page == "projects.html") {
    $("html, body").animate(
      {
        scrollTop: $("#prototypes").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "projects.html#prototypes";
  }
});

$("#photographs-button").click(function () {
  if (page == "designs.html") {
    $("html, body").animate(
      {
        scrollTop: $("#photographs").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "designs.html#photographs";
  }
});

$("#art-button").click(function () {
  if (page == "designs.html") {
    $("html, body").animate(
      {
        scrollTop: $("#art").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "designs.html#art";
  }
});

$("#flyers-button").click(function () {
  if (page == "designs.html") {
    $("html, body").animate(
      {
        scrollTop: $("#flyers").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "designs.html#flyers";
  }
});

$("#designs-button").click(function () {
  window.location.href = "designs.html";
});

$("#about-button").click(function () {
  if (page == "index.html") {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "index.html#about";
  }
});
