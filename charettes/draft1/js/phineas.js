// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js

// opacity/display none, then opacity/display block
// have consistent color

// select path + seven spans before, have it select children (create array of spans with ids)

$(document).ready(function() {

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

  $(".playText span").addClass("shake");


});
