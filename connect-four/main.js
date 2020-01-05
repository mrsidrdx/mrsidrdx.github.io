// We need to use jQuery for the following:
var player1, player1Color, player2, player2Color;
$('#submit-button').on('click', function() {
  //var player1 = prompt("Player One: Enter Your Name , you will be Blue");
  player1 = $('#player1').val();
  player1Color = '#45CE30';

  //var player2 = prompt("Player Two: Enter Your Name, you will be Red");
  player2 = $('#player2').val();
  player2Color = '#BB2CD9';
  if(player1 === "" || player1 === undefined || player2 === "" || player2 === undefined) {
    $('#blank').text("Don't Leave Player Names Blank. Please Set Some Real Names!\n\n");
  }
  else {
    $('#blank').text("");
  }
});

var game_on = true;
var table = $('table tr');

// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
// Change the color of a button
function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(255, 255, 255)') {
      return row
    }
  }
}

// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(255, 255, 255)' && one !== undefined);
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Game End
function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      //$('#b').fadeOut('fast');
      $('h1').text("Bingo! "+winningPlayer+" has won. Refresh your browser to play again!").css("fontSize", "50px");
      game_on = false;
    }
  }
  var r= $('<br><a href="index.html"><button type="button" class="btn btn-primary btn-lg">Play Again!</button></a>');
  $("#refresh").append(r);
}

$('#close-button').on('click', function() {
  if(player1 !== "" && player1 !== undefined && player2 !== "" && player2 !== undefined) {
  // Start with Player One
  $('#b').fadeOut('fast');
  var currentPlayer = 1;
  var currentName = player1;
  var currentColor = player1Color;

  // Start with Player One
  $('h3').text(player1+": it is your turn, please pick a column to drop your green chip.");

  $('.board button').on('click',function() {
    if(game_on) {
    // Recognize what column was chosen
    var col = $(this).closest("td").index();

    // Get back bottom available row to change
    var bottomAvail = checkBottom(col);

    // Drop the chip in that column at the bottomAvail Row
    changeColor(bottomAvail,col,currentColor);

    // Check for a win or a tie.
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
      gameEnd(currentName);
      return game_on;
    }

    // If no win or tie, continue to next player
    currentPlayer = currentPlayer * -1 ;

    // Re-Check who the current Player is.
    if (currentPlayer === 1) {
      currentName = player1;
      $('h3').text(currentName+": it is your turn, please pick a column to drop your green chip.");
      currentColor = player1Color;
    }else {
      currentName = player2
      $('h3').text(currentName+": it is your turn, please pick a column to drop your purple chip.");
      currentColor = player2Color;
    }
  }
  });
 }
 else {
   alert("Don't Leave Player Names Blank, Please Set Again!");
 }
});
