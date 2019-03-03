// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {

  var playFilter = false;

    // $('#fullpage').fullpage({
    //   navigation: true,
    // });

    $("#readplayButton").toggle(function()
        {
          $('#masked-page').removeClass("ClipOn").addClass("ClipOff");
          setTimeout(function(){
            $('.readText').css("display", "none");
            $('.playText').css("display", "inherit");
            }, 1000);

            playFilter = true;

          }, function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");
            setTimeout(function(){
              $('.playText').css("display", "none");
              $('.readText').css("display", "inherit");
              }, 1000);


            playFilter = false;
    });

    $(function() {
      var button = $('#readplayButton')
          , box = $('.box')
      ;

      button.on('click', function() {
        box.removeClass('box');
        $(document).trigger('buttonClick');
      });

      $(document).on('buttonClick', function() {
        box.text('Clicked!');
      });
    });

    $('p.playText').mouseover(function(){

      if (playFilter==true) {
        $(this).text("tan");
        $(this).css("color", "yellow");
        $(this).css("font-size", "2em");
      }
      else {
      }
      // $(this).text("tan");
      // $(this).css("color", "red");

    });
});
