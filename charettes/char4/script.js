var rotate = 20;

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY=0;
var mouseX=0;

 $(document).mousemove(function( event ) {
    mouseX = event.pageY;
    mouseY = event.pageX;
    rotateY = -(pageY/1-mouseY)/pageY*rotate;
    rotateX = (pageX/1-mouseX)/pageX*rotate;
    $('#test').css({ '-webkit-transform' : 'translateX(-50%) translateY(-50%) scale(1) perspective( 1960px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
  });
