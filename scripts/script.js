var etchASketch = {

  /**************************
  DRAWS INITIAL 16x16 GRID
  ***************************/
  onReady: function() {
    var squareBuilder = "<div class='gridSquare'></div>";
    for (i = 0; i < 256; i++) {
      $(".gridArea").append(squareBuilder);
    }
    $("div div:nth-child(16n)").after("<br>");

    $(".gridSquare").mouseenter(etchASketch.penTool);
    $("#new-grid").click(etchASketch.drawNewGrid);
  },

  /**************************
  DRAWING FUNCTION
  ***************************/
  penTool: function(mouseenter) {
    $(this).css('background-color', 'blue');

  },

  /**************************
  NEW GRID FUNCTION
  ***************************/
  drawNewGrid: function() {
    var squaresPerSide = prompt("How many squares wide should this grid be? Enter a number between 1-100:");
    while (squaresPerSide < 1 || squaresPerSide > 100 ) {
      squaresPerSide = prompt("Please enter a number between 1-100:");
    }
    $('.gridArea').empty();

    /**** Calculates new length and width ****/

    var percentPerBox = (100/squaresPerSide);
    percentPerBox = percentPerBox + "%";

    /**** Builds new grid ****/

    var squareBuilder = "<div class='gridSquare'></div>";
    for (i = 0; i < (squaresPerSide * squaresPerSide); i++) {
      $(".gridArea").append(squareBuilder);
    }

    /**** Assigns new length/width properties to squares ****/

    $(".gridSquare").width(percentPerBox);
    $(".gridSquare").height(percentPerBox);

    /**** Inserts linebreaks ****/

    var $linebreakConstructor = $('div div:nth-child(' + squaresPerSide + 'n)');
    $linebreakConstructor.after("<br>");

    $(".gridSquare").mouseenter(etchASketch.penTool);

  }
};


$(document).ready(etchASketch.onReady);
