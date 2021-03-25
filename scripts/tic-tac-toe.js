
//whos turn is it when the game starts?
//it is x's turn when the game starts
var xTurn = true;
var gameIsOver = false;


//function to update the board, takes an input of which square was pressed
function updateBoard(squarePressed)
{
    //when player x clicks a square, mark that square with an x
    //if that square is not already marked. then update the turn to
    //be o's turn. then prompt o to move   
    if (xTurn && squarePressed.innerHTML.length == 0 && !gameIsOver)
    {
        squarePressed.innerHTML = 'X';
        checkBoard()
        if (gameIsOver)
        {
            return;
        }
        xTurn = false;
        document.getElementById('instructions').innerHTML = "Player O's Turn"
    }
    //when player o clicks a square, mark that square with an o
    //if that square is not already marked. then update the turn to
    //be x's turn. then prompt x to move
    else if (!xTurn && squarePressed.innerHTML.length == 0 && !gameIsOver)
    {
        squarePressed.innerHTML = 'O';
        checkBoard();
        if (gameIsOver)
        {
            return;
        }
        xTurn = true;
        document.getElementById('instructions').innerHTML = "Player X's Turn"
    }

}

//what are the possible winning board combinations? 
//  |1| |2| |3|
//  |4| |5| |6|
//  |7| |8| |9|
//if 1, 2, and 3 are the same, its a win
//if 4, 5, and 6 are the same, its a win
//if 7, 8, and 9 are the same, its a win
//if 1, 4, and 7 are the same, its a win
//if 2, 5, and 8 are the same, its a win
//if 3, 6, and 9 are the same, its a win
//if 1, 5, and 9 are the same, its a win
//if 3, 5, and 7 are the same, its a win

//after a player moves, check the board.

function checkBoard()
{
    //make variables for each square
    var square1 = document.getElementById('square1');
    var square2 = document.getElementById('square2');
    var square3 = document.getElementById('square3');
    var square4 = document.getElementById('square4');
    var square5 = document.getElementById('square5');
    var square6 = document.getElementById('square6');
    var square7 = document.getElementById('square7');
    var square8 = document.getElementById('square8');
    var square9 = document.getElementById('square9');

    //check if there is a winning combination
    if 
    (
        square1.innerText == square2.innerText && square2.innerText == square3.innerText && square1.innerText != "" ||
        square4.innerText == square5.innerText && square5.innerText == square6.innerText && square4.innerText != "" ||
        square7.innerText == square8.innerText && square8.innerText == square9.innerText && square7.innerText != "" ||
        square1.innerText == square4.innerText && square4.innerText == square7.innerText && square1.innerText != "" ||
        square2.innerText == square5.innerText && square5.innerText == square8.innerText && square2.innerText != "" ||
        square3.innerText == square6.innerText && square6.innerText == square9.innerText && square3.innerText != "" ||
        square1.innerText == square5.innerText && square5.innerText == square9.innerText && square1.innerText != "" ||
        square3.innerText == square5.innerText && square5.innerText == square7.innerText && square3.innerText != ""
    )
    {
        //it is a win so end the game and display the winner
        if(xTurn)
        {
            document.getElementById('instructions').innerHTML = "Player X Wins!";
            gameIsOver = true;
            document.getElementById('button').innerHTML = "Restart";
        }
        else
        {
            document.getElementById('instructions').innerHTML = "Player O Wins!";
            gameIsOver = true;
            document.getElementById('button').innerHTML = "Restart";
        }
    }

    //check if there are no other spaces
    var areSpaces = false;

    var squareArray = 
    [
        square1.innerText, square2.innerText, square3.innerText,
        square4.innerText, square5.innerText, square6.innerText,
        square7.innerText, square8.innerText, square9.innerText
    ];

    //check each space to see if it is empty
    for(i = 0; i < 9; i++)
    {
        if (squareArray[i] == "")
            areSpaces = true;
    }

    if(areSpaces)
    {
        //the game can continue
        return;
    }

    else
    {
        //the game needs to end with a tie
        gameIsOver = true;
        document.getElementById('instructions').innerHTML = "It's a Tie.";
        document.getElementById('button').innerHTML = "Restart";
    }
}