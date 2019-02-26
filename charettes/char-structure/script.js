$( document ).ready(function() {

  $( "#cliveGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#2c3e50");
      $('body').css("background", "#2c3e50");
      $('body').css("color", "#fff");
      $('#cliveImg').css("box-shadow", "0px 0px 50px rgba(255, 255, 255, 0.4)");
       $('#textReplace').text( "Clive Wearing" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('body').css("color", "#222");
      $('#cliveImg').css("box-shadow", "none");
      $('#textReplace').text( "Select a patient to see their story" );
    });

  $( "#phineasGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#b83b5e");
      $('body').css("background", "#b83b5e");
      $('body').css("color", "#fff");
      $('#phineasImg').css("box-shadow", "0px 0px 50px rgba(255, 255, 255, 0.4)");
      $('#textReplace').text( "Phineas Gage" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('body').css("color", "#222");
      $('#phineasImg').css("box-shadow", "none");
      $('#textReplace').text( "Select a patient to see their story" );
    });

  $( "#louisGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#6a2c70");
      $('body').css("background", "#6a2c70");
      $('body').css("color", "#fff");
      $('#louisImg').css("box-shadow", "0px 0px 50px rgba(255, 255, 255, 0.4)");
      $('#textReplace').text( "Louis Victor Leborgne" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('body').css("color", "#222");
      $('#louisImg').css("box-shadow", "none");
      $('#textReplace').text( "Select a patient to see their story" );
    });

  $( "#kimGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#ffb228");
      $('body').css("background", "#ffb228");
      $('body').css("color", "#fff");
      $('#kimImg').css("box-shadow", "0px 0px 50px rgba(255, 255, 255, 0.4)");
      $('#textReplace').text( "Kim Peek" );

    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('body').css("color", "#222");
      $('#kimImg').css("box-shadow", "none");
      $('#textReplace').text( "Select a patient to see their story" );
    });



});
