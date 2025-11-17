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

$("#waterford").click(function () {
  window.open("https://karen-malka.github.io/research-at-waterford/", "_blank");
});

$("#artalcove").click(function () {
  window.open("http://4300showcase.infosci.cornell.edu:5229/", "_blank");
});

$("#applefest").click(function () {
  window.open("https://karen-malka.github.io/apple-fest/", "_blank");
});

$("#bearbargain").click(function () {
  window.open("http://bear-bargain.myartsonline.com/", "_blank");
});

$("#asset-management").click(function () {
  window.open(
    "https://www.figma.com/proto/67sdgVBRLS03E303Unq9FP/Daikin-Building-Walkthrough-Assets?node-id=1-2&starting-point-node-id=1%3A2&t=gp7XM7PYbGb45dTm-1",
    "_blank"
  );
});

$("#greengo").click(function () {
  window.open(
    "https://www.figma.com/proto/snuaP7dCBXG1gZxHYpgJuJ/GreEngine-Prototype?node-id=497-139&p=f&t=afClwpPXxSaTboUU-8&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=497%3A139&show-proto-sidebar=1&hide-ui=1",
    "_blank"
  );
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

$("#designs-button").click(function () {
  if (page == "index.html") {
    $("html, body").animate(
      {
        scrollTop: $("#designs").offset().top - 100,
      },
      1000
    );
  } else {
    window.location.href = "index.html#designs";
  }
});
