$(document).ready(function() {
  var squareBuilder = "<div class='gridSquare'></div>";
  for (i = 0; i < 256; i++) {
    $(".gridArea").append(squareBuilder);
  }
  $("div div:nth-child(16n)").after("<br>");

  $(document).on('mouseenter', '.gridSquare', function() {
    $(this).css('background-color', 'blue');
  });

  $(document).on('click', '#new-grid', function() {
    $('.gridSquare').remove();
  });

});


/*

var squaresPerSide;
var pixelsPerBox = 960/squaresPerSide;
var lwInPixels = pixelsPerBox + "px";
$('gridSquare.').width('lwInPixels') */
