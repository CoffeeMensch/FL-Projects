let sefedNum = 0;
let randomNum = 0;
let attempt = 0;
let totalPrize = 0;
let possiblePrize = 100;
let agrement = null;
let agrementCont = null;
let winFail;

function promptAsk() {
    let prWindow = window.confirm("Do you want to play a game?");

    if (prWindow === false) {
        alert("You did not become a billionaire, but can.");
    } else {
        loopingPromptWindow();
    }
}

function promptWindow() {
    sefedNum = window.prompt("Choose a roulette pocket number from 0 to 8\nAttempts left: " + attempt + "\nTotal prize: "
        + totalPrize + "\nPossible prize of current moment: " + possiblePrize);
    sefedNum = parseInt(sefedNum);
}

function loopingPromptWindow() {
    attempt = 1;
    while (attempt >= 1 && attempt <= 3) {
        promptWindow();
        randomize(0, 8);

        if (sefedNum === randomNum && attempt === 1) {
            totalPrize = 100;
            continiuGame();
            if (agrementCont === true) {
                initValues();
            } else {
                stopGame();
                break;
            }
        } else if (sefedNum === randomNum && attempt === 2) {
            totalPrize = 50;
            continiuGame();
            if (agrementCont === true) {
                initValues();
            } else {
                stopGame();
                break;
            }
        } else if (sefedNum === randomNum && attempt === 3) {
            totalPrize = 25;
            continiuGame();
            if (agrementCont === true) {
                initValues();
            } else {
                stopGame();
                break;
            }
        }
        attempts();
    }
}

function continiuGame() {
    agrementCont = window.confirm("Congratulation, you won!   Your prize is:" + totalPrize + " $. Do you want to continue?");
}

function initValues() {
    winFail = true;
    increasingBonuses();
    loopingPromptWindow();
}

function stopGame() {
    window.alert("Congratulation, you won!   Your prize is: " + totalPrize + " $.");
}

function increasingBonuses() {
    if (winFail === true) {
        possiblePrize *= 2;
       // totalPrize += totalPrize;
    }
}

function failedGame() {
    if (attempt === 0) {
        alert("Thank you for your participation. Your prize is: " + totalPrize + "$");
        agrement = window.confirm("Do You want to play again?");
    }
    if (agrement === true) {
        possiblePrize = 100;
        loopingPromptWindow();
    }
   // agrement = null;
}

function randomize(min, max) {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (winFail === true) {
        max += 4;
    }

}

function plusingTotalPrize(nam1, num2) {
    return totalPrize = nam1 + num2;
}

function attempts() {
    attempt++;

    if (attempt > 3)
        attempt = 0

    if (possiblePrize < 25)
        return;

    if (attempt === 2) {
        possiblePrize = possiblePrize / 2;

    } else if (attempt === 3) {

        possiblePrize = possiblePrize / 2;
    }
}

promptAsk();
failedGame();

