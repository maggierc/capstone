// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {

  var playFilter = false;

  $("#readplayButton0").mouseenter(function(){
    $('#readplayButton3').css({
        'height': '60px',
        'width': '60px',
        'background' : 'white'
    });
  });

  $("#readplayButton0").mouseleave(function(){
    $('#readplayButton3').css({
        'height': '20px',
        'width': '20px',
        'background' : 'none'
    });
  });

    $("#readplayButton0").toggle(function() {
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






});
