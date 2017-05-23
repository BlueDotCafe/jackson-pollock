$(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
      $(".Pollock-showing").fadeToggle();
      $(".Pollock-hidden").fadeToggle();
  });

});
