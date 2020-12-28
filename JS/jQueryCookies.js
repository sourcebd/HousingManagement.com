// -----------------C O O K I E S-----------------//
// Cookies Hide
$(document).ready(function(){
  $(".Cookies").mouseover(function(){
    $(".Cookies").fadeOut();
    $(".Cookies").fadeOut("slow");
    $(".Cookies").fadeOut(10000);
  });
});

// Accept Cookies
$(document).ready(function(){
  $(".jQueryCookiesAccept").click(function(){
    $(".jQueryCookiesAccept").load("slow", function(){
      alert("Will You Accept Our Cookies?");
    });
  });
});
