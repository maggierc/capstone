$( document ).ready(function() {

  $( "#cliveGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#0e2844");
      $("#cliveOverlay").css("background", "none");
      $('body').css("background", "#0e2844");
      $('#cliveImg').css("box-shadow", "0px 0px 20px rgba(255, 255, 255, 0.2)");
       $('#textReplace').css("color", "#fff").text( "Clive Wearing" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#cliveImg').css("box-shadow", "none");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
    });

  $( "#phineasGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#6d0021");
      $("#phineasOverlay").css("background", "none");
      $('body').css("background", "#6d0021");
      $('#phineasImg').css("box-shadow", "0px 0px 20px rgba(255, 255, 255, 0.2)");
      $('#textReplace').css("color", "#fff").text( "Phineas Gage" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#phineasImg').css("box-shadow", "none");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
    });

  $( "#louisGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#36094f");
      $("#louisOverlay").css("background", "none");
      $('body').css("background", "#36094f");
      $('#louisImg').css("box-shadow", "0px 0px 20px rgba(255, 255, 255, 0.2)");
      $('#textReplace').css("color", "#fff").text( "Louis Victor Leborgne" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#louisImg').css("box-shadow", "none");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
    });

  $( "#kimGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#6d2a00");
      $("#kimOverlay").css("background", "none");
      $('body').css("background", "#6d2a00");
      $('#kimImg').css("box-shadow", "0px 0px 20px rgba(255, 255, 255, 0.2)");
      $('#textReplace').css("color", "#fff").text( "Kim Peek" );

    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#kimImg').css("box-shadow", "none");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
    });




});
