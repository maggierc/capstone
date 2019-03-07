// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

$(document).ready(function() {

  // var playFilter = false;
  //
  // $("#readplayButton").toggle(function()  {
  //       $('#masked-page').removeClass("ClipOn").addClass("ClipOff");
  //     },
  //     function() {
  //         $('#masked-page').removeClass("ClipOff").addClass("ClipOn");
  //     });



    $("#readplayButton").toggle(function()  {
          $('#masked-page').removeClass("ClipOn").addClass("ClipOff");
          setTimeout(function(){
            $('.readText').css("display", "none");
            $('.playText').css("display", "inherit");
            }, 1000);
          playFilter = true;

          },

          function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");
            setTimeout(function(){
              $('.playText').css("display", "none");
              $('.readText').css("display", "inherit");
              }, 1000);
            playFilter = false;
    });

    $(window).scroll(function(){
        $("#section1").css("opacity", 1 - $(window).scrollTop() / 400);

      });



    // $('p.playText').mouseover(function(){
    //
    //   if (playFilter==true) {
    //     $(this).text("tan");
    //     $(this).css("color", "yellow");
    //     $(this).css("font-size", "2em");
      // }
    //   else {
    //   }
    //   // $(this).text("tan");
    //   // $(this).css("color", "red");
    //
    // });




});
