function isEquals(num1, num2) {
    return num1 === num2;
}

console.log(isEquals(3, 3));

function isBigger(num1, num2) {
    return num1 > num2;

}

console.log(isBigger(1, -3));

function storeNames(name) {
    let arrayOfNames = [1];
    let j = 0;
    for (let i = 0; i < arguments.length; i++) {
        arrayOfNames[j] = arguments[i];
        j++;
    }
    return arrayOfNames;
}

console.log(storeNames("Anna", "Amir", "Milana", "Tim"))

function getDifference(num1, num2) {
    var res = num1 - num2;//-5*(-1)
    if (res < 0) {
        res *= -1;
    }
    return res;
}

console.log(getDifference(5, 3));
console.log(getDifference(9, 11));

function negativeCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log(negativeCount([4, 3, 2, 9]));
console.log(negativeCount([4, -3, 2, -9]));

function letterCount(string, leter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === leter) {
            count++;
        }
    }
    return count;
}

console.log(letterCount("Marry", "r"));

function countPoints(arr) {
    let count = 0;
    let points = 0;

    for (let i = 0; i < arr.length; i++) {
        points = arr[i].split(':');
        let my_team = points[0];
        my_team = parseInt(my_team);
        let another_team = points[1];
        another_team = parseInt(another_team);

        if(my_team > another_team) {
            count += 3;
        } else if(my_team === another_team) {
            count += 1;
        }
    }
    return count;
}

console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));

function f(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {

        //'100:90'
        var my_team = arr[i];//spleat
        var another_team = arr[i];

        /* if ()//===
             count += 1;
         else if ()//>
             count += 3;*/

    }
    return count;
}

/*
Task #7
Our basketball team (x – our team) completed the championship. The result of each match look like "x:y".
Results of all matches are recorded in the collection like this: ["95:74", "107:107", "99:110", ...]

Write a function – countPoints
It should accept a collection of football games scores and count the points of our team in the championship.
Rules for counting points for each match:
if x > y   - 3 points
if x < y   - 0 point
if x = y   - 1 point

 */