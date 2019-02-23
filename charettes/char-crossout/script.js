var _text = "";
$(document).ready(function() {
    _text = $("#name1").text();
    StrikeThrough(0);
});

function StrikeThrough(index) {
    if (index >= _text.length)
        return false;
    var sToStrike = _text.substr(0, index + 1);
    var sAfter = (index < (_text.length - 1)) ? _text.substr(index + 1, _text.length - index) : "";
    $("#name1").html("<strike>" + sToStrike + "</strike>" + sAfter);
    window.setTimeout(function() {
        StrikeThrough(index + 1);
    }, 100);
}


// $(document).ready(function(){
//
//   $("#name1").hover(function(){
//     $(this).css("color", "yellow");
//     }, function(){
//     $(this).css("color", "white");
//   });
//
// });
