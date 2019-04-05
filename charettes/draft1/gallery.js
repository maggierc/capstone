$( document ).ready(function() {

  $( "#cliveGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#0e2844");
      $("#cliveOverlay").css("background", "none");
      $('body').css("background", "#0e2844");
       $('#textReplace').css("color", "#fff").text( "Clive Wearing" );
       $('#textReplaceType').css("color", "#fff").text( "Memory" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
      $('#textReplaceType').css("color", "#fff").text( "" );
    });

  $( "#phineasGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#6d0021");
      $("#phineasOverlay").css("background", "none");
      $('body').css("background", "#6d0021");
      $('#textReplace').css("color", "#fff").text( "Phineas Gage" );
      $('#textReplaceType').css("color", "#fff").text( "Personality" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
      $('#textReplaceType').css("color", "#fff").text( "" );
    });

  $( "#louisGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#36094f");
      $("#louisOverlay").css("background", "none");
      $('body').css("background", "#36094f");
      $('#textReplace').css("color", "#fff").text( "Louis Leborgne" );
      $('#textReplaceType').css("color", "#fff").text( "Language" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
      $('#textReplaceType').css("color", "#fff").text( "" );
    });

  $( "#kimGallery .overlay" )
    .mouseenter(function() {
      $(".overlay").css("background", "#6d2a00");
      $("#kimOverlay").css("background", "none");
      $('body').css("background", "#6d2a00");
      $('#textReplace').css("color", "#fff").text( "Kim Peek" );
      $('#textReplaceType').css("color", "#fff").text( "Knowledge" );
    })
    .mouseleave(function() {
      $(".overlay").css("background", "none");
      $('body').css("background", "#eee");
      $('#textReplace').css("color", "#222").text( "Select a patient to see their story" );
      $('#textReplaceType').css("color", "#fff").text( "" );
    });




});
