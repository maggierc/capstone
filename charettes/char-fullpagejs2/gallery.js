$( document ).ready(function() {

  $( "#cliveGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#2c3e50");
      $("#cliveOverlay").css("background", "none");
      $('body').css("background", "#2c3e50");
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
      $(".overlay").css("background", "#b83b5e");
      $("#phineasOverlay").css("background", "none");
      $('body').css("background", "#b83b5e");
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
      $(".overlay").css("background", "#6a2c70");
      $("#louisOverlay").css("background", "none");
      $('body').css("background", "#6a2c70");
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
      $(".overlay").css("background", "#ffb228");
      $("#kimOverlay").css("background", "none");
      $('body').css("background", "#ffb228");
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
