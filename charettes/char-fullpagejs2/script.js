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
            }, 500);


            playFilter = false;
    });

    $('p.playText, h1.playText').each(function() {

        var words = $(this).text().split(' ');

        $(this).empty().html(function() {

          for (i = 0; i < words.length; i++) {
            if (i == 0) {
              $(this).append('<span>' + words[i] + '</span>');
            } else {
              $(this).append(' <span>' + words[i] + '</span>');
            }
          }

        });

      });

    $('.playText span, .playFX').mouseover(function(){

      var random = (Math.random() * 2.5) + 1;

      if (playFilter==true) {
        $(this).text("tan").css({
            'color': '#f6ff00',
            'font-size': random + 'em',
            'display': 'inline-block',
            'float' : 'left',
            'text-transform' : 'uppercase',
            'line-height' : '0.7em'
        })

        // ;
        // $(this).css("color", "yellow");
        // $(this).css("font-size", "random");
        // $(this).css("display", "absolute");

      }
      else {
      }
      // $(this).text("tan");
      // $(this).css("color", "red");

    });



    function loop() {
      var x = document.getElementById("playTextBackground").textContent;
      setInterval(function(){
          $(".playText h3").css('color', 'yellow');
          $(".playText h3").text('TAN');
          setInterval(function(){
              $(".playText h3").css('color', 'white');
              $(".playText h3").text(x);
            },1000);
        },1000);
        loop();

    };

    loop();


});
