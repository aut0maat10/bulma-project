// script for scroll

$(document).ready(function() {
  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    const position = $($(this).attr("href")).offset().top;
    $("body, html").animate({ scrollTop: position }, 700);
  });
});
