// Options documentation at:
// https://github.com/alvarotrigo/fullPage.js


$(document).ready(function() {

    // $('#fullpage').fullpage({
    //   navigation: true,
    // });

    $("div.button").toggle(function()
    {
            $('#masked-page').removeClass("ClipOn").addClass("ClipOff");

    }, function() {
            $('#masked-page').removeClass("ClipOff").addClass("ClipOn");

    });

});
