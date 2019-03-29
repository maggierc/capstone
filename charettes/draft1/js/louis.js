// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {

  var playFilter = false;

    $('p.playText').each(function() {

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
            // 'display': 'inline-block',
            'float' : 'left',
            'text-transform' : 'uppercase',
            'line-height' : '0.7em'
        })

      }
      else {
      }

    });




});
