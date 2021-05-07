// * Dinamic movement MENU Home.

  $(document).ready(function () {
    $("#menu").hover(function () {
        $("#nav", this).slideDown(450);
      }, function(){
        $("#nav", this).stop().slideUp(300);
      });
  });




