function updateDisplay(newValue)
{
    //find the display box
    var displayBox = document.getElementById('display');
    var displayText = displayBox.innerHTML;
    var validInput = true;
    if (displayText.endsWith("+") 
    || displayText.endsWith("-")
    || displayText.endsWith("*") 
    || displayText.endsWith("/"))
        validInput = false;

    switch (newValue)
    {
        case '':
            displayBox.innerHTML = '';
            break;
        case '0':
            displayBox.innerHTML += '0';
            break;
        case '1':
            displayBox.innerHTML += '1';
            break;
        case '2':
            displayBox.innerHTML += '2';
            break;
        case '3':
            displayBox.innerHTML += '3';
            break;
        case '4':
            displayBox.innerHTML += '4';
            break;
        case '5':
            displayBox.innerHTML += '5';
            break;
        case '6':
            displayBox.innerHTML += '6';
            break;
        case '7':
            displayBox.innerHTML += '7';
            break;
        case '8':
            displayBox.innerHTML += '8';
            break;
        case '9':
            displayBox.innerHTML += '9';
            break;
        case '+':
            if (!validInput)
                break;
            displayBox.innerHTML += '+';
            break;
        case '-':
            if (!validInput)
                break;
            displayBox.innerHTML += '-';
            break;
        case '*':
            if (!validInput)
                break;
            displayBox.innerHTML += '*';
            break;
        case '/':
            if (!validInput)
                break;
            displayBox.innerHTML += '/';
            break;
        case '=':
            if (!validInput)
            {
                displayBox.innerHTML = "Err";
                break;
            }
            if (!displayText == '')
            {
                displayBox.innerHTML = eval(displayText);
            }
            break;
    }
}