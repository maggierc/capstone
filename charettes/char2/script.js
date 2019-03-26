$(document).ready(function() {

  $('#reload').click(function() {
    location.reload();
  });


  var playFilter = true;

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


    $('#section1 .playText span').mouseover(function(){

      var random = (Math.random() * 2.5) + 1;

      if (playFilter==true) {
        $(this).text("tan").css({
            'color': '#f6ff00',
            'font-size': random + 'em',
            // 'display': 'inline-block',
            'float' : 'left',
            'text-transform' : 'uppercase',
            'line-height' : '0.7em',
        })

      }
      else {
      }

    });

    $('#section2 .playText span').mouseenter(function() {
      var text = this.innerText;
      $(this).css({'color':'cyan', 'opacity':'1'});
      var divW = (window.innerWidth / 10).toFixed();
      var divH = (window.innerHeight / 10).toFixed();
      var value = Math.random() * 0xFF | 0;
      var grayscale = (value << 16) | (value << 8) | value;
      var color = '#' + grayscale.toString(16);
      // var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
      $newdiv = $('<h3/>').css({
          'color': color,
      });

      var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
      var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

      $newdiv.css({
          'position': 'absolute',
          'left': posx + 'px',
          'top': posy + 'px',
          'display': 'none',
          'filter': 'blur(0.2px)',
          'opacity' : '0.1'
      }).text(text).appendTo('body').fadeIn(500).delay(500).fadeOut(500);
    });

    $('#section2 .playText span').mouseleave(function() {
      var text = this.innerText;
      $(this).css('opacity', '0');
      var divW = (window.innerWidth / 10).toFixed();
      var divH = (window.innerHeight / 10).toFixed();
      var value = Math.random() * 0xFF | 0;
      var grayscale = (value << 16) | (value << 8) | value;
      var color = '#' + grayscale.toString(16);
      // var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
      $newdiv = $('<h1/>').css({
          'color': color,
      });

      var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
      var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

      $newdiv.css({
          'position': 'absolute',
          'left': posx + 'px',
          'top': posy + 'px',
          'filter': 'blur(1px)',
          'display': 'none'
      }).text(text).appendTo('body').fadeIn(500).delay(500).fadeOut(500);
    });

    $("#section4 span").addClass("shake-hard shake-freeze");
    $("#section3 span").addClass("shake");

  });
