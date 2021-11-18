/* START TASK 1: Your code goes here */

function cellsTableFirstColomn(td) {
    td.style.backgroundColor = 'blue';

}

function cellsTable(td) { //even, what he gets?
    td.style.backgroundColor = 'yellow';

    if (td.innerText === 'Special cell') {
        var arrTd = document.getElementsByTagName('td');
        for (let i = 0; i < arrTd.length; i++) {
            if (arrTd[i].style.backgroundColor === "" || arrTd[i].style.backgroundColor === "blue") {
                arrTd[i].style.backgroundColor = 'yellow';
            }
        }
    }
}

/* END TASK 1 */
let button = document.getElementsByTagName('button')[0];
let input = document.querySelectorAll("input")[0];
input.oninput = changeValue;

function setLabelColor(isTrue) {
    let task2 = document.getElementById('task2Label');
    let task2Label = document.getElementById('task2Label');

    let TelNum = document.getElementById('TelNum');
    let label = document.createElement('label');

    if (isTrue) {

        task2Label.style.backgroundColor = 'green';
        TelNum.style.borderColor = 'black';

        label.innerHTML = 'Data was successfully sent';
        label.style.color = 'white';

        task2.append(label);
    } else {
        task2Label.style.backgroundColor = 'red';
        task2Label.style.border = '1px solid';


        label.innerHTML = 'The data is valid when user type phone number in next format - +380*********';
        label.style.color = 'white';


        task2.append(label);
    }
}

function changeValue() {
    let arrNum = '+380*********';
    if (input.value.length === arrNum.length) {
        button.removeAttribute('disabled');

        setLabelColor(true)
    } else {
        button.setAttribute('disabled', 'disabled');
        setLabelColor(false);
    }
}

function disablButton() {

    button.disabled;
}

let main_storage = document.getElementById('task3').localStorage;


function savedDataGame(key) {

}

function ballGame() {
    /*let fieldImg =*/

    document.getElementById('fieldImg').addEventListener("click", function () {
        alert('Working');
    });


    //let ball = document.getElementById('ballImg');
    //fieldImg.addEventListener(ball);
    // let ball = document.getElementById('ballImg');
    //ball.addEventListener("click", fieldImg);
}

ballGame();


//let task2 = document.getElementById('task2');
//task2.firstElementChild.nextElementSibling.innerHTML = "t";

//#task2Label {
//     width: 328px;
//     height: 40px;
//     text-align: center;
//     background-color: red;
// }


/* START TASK 2: Your code goes here */


/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
