let amOfMoney;
let numOfYears;
let percentOfYear;

let profit = 0;

function inputAmountOfMoney() {
    let amountOfMoney = prompt("Inputs initial amount of money");
    if (amountOfMoney < 1000) {
        amountOfMoney = alert("Invalid input data");
    } else {
        amOfMoney = parseInt(amountOfMoney);
        parseInt(amOfMoney);
    }
}


function inputNumberOfYears() {
    let numberOfYears = prompt("Inputs number of years");
    if (numberOfYears < 1) {
        numberOfYears = alert("Invalid input data");
    } else {
        numOfYears = parseInt(numberOfYears);
    }
}


function inputPercentageOfYear() {
    let percentageOfYear = prompt("Inputs percentage of a year");
    if (percentageOfYear > 100) {
        percentageOfYear = alert("Invalid input data");
    } else {
        percentOfYear = parseInt(percentageOfYear);

    }
}


function calculateProfitOfDepositAccount() {

    for (let i = 0; i < numOfYears; i++) {
        profit += amOfMoney / percentOfYear;

    }
    alert(profit);
    amOfMoney += profit;
    alert(amOfMoney);

}

inputAmountOfMoney();
inputNumberOfYears();
inputPercentageOfYear();

calculateProfitOfDepositAccount();

