$(document).ready(function() {


  $("div.button").toggle(function()
  {
          $('#masked-page').removeClass("ClipOn").addClass("ClipOff");

  }, function() {
          $('#masked-page').removeClass("ClipOff").addClass("ClipOn");

  });

  


  // $("div.button").click(function(){
  //
  //   $("div#masked-page").toggleClass("ClipOn");
  //
  // });


});
