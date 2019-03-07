$(document).ready(function(){

  $('#original').mouseenter(function() {
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
        'display': 'none'
    }).text('Clive Wearing').appendTo('body').fadeIn(500);
  });

  $('#original').mouseleave(function() {
    var divW = (window.innerWidth / 10).toFixed();
    var divH = (window.innerHeight / 10).toFixed();
    var value = Math.random() * 0xFF | 0;
    var grayscale = (value << 16) | (value << 8) | value;
    var color = '#' + grayscale.toString(16);
    // var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<h1/>').css({
        'color': color
    });

    var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
    var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();

    $newdiv.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px',
        'display': 'none'
    }).text('Clive Wearing').appendTo('body').fadeIn(500);
  });

  // function makeDiv() {
  //     var divW = (window.innerWidth / 5).toFixed();
  //     var divH = (window.innerHeight / 5).toFixed();
  //     var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
  //     $newdiv = $('<div/>').css({
  //         'width': divW + 'px',
  //         'height': divH + 'px',
  //         'background-color': color
  //     });
  //
  //     var posx = (Math.random() * ($(document).innerWidth() - divW)).toFixed();
  //     var posy = (Math.random() * ($(document).innerHeight() - divH)).toFixed();
  //
  //     $newdiv.css({
  //         'position': 'absolute',
  //         'left': posx + 'px',
  //         'top': posy + 'px',
  //         'display': 'none'
  //     }).appendTo('body').fadeIn(100);



});
