function reverseNumber(num) {

    let res = 0;
    let sign = 0;
    if (Math.sign(num) === -1) {
        sign = true;
        num = num * (-1);
    }
    while (num) {
        res = res * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (sign === true) {
        return res * (-1);
    } else {
        return res;
    }
}

let elreverseNumber = console.log(reverseNumber(12345));
let elreverseNegativeNumber = console.log(reverseNumber(-56789));

let arr = [2, 5, 8];

function forEach(arr, func) {
    let i = 0;
    while (i < arr.length) {
        if (i in arr) {
            func.call(arr, arr[i]);
        }
        i++;
    }
}

forEach(arr, function (el) {
    console.log(el);
})

function map(arr, func) {
    let newArray = [];
    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            newArray[i] = func(arr[i]);
            newArray[i] = parseInt(newArray[i]);
        }
        i++;
    }
    console.log(newArray);
    return newArray;
}

console.log(map([2, 5, 8], function (el) {
    return el + 3;
}));

map([1, 2, 3, 4, 5], function (el) {
    return el * 2;
})

function filter(arr, func) {
    let newArray = [];//[empty,5]
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            newArray[j] = parseInt(arr[i]);
            j++;
        }
    }
    console.log(newArray);
    return newArray;
}

filter([2, 5, 1, 3, 8, 6], function (el) {
    return el > 3;
})

filter([1, 4, 6, 7, 8, 10], function (el) {
    return el % 2 === 0
})

let data = [{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
},
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
    }
]


function getAdultAppleLovers(data) {
    let newArray = [];
    let i = 0;
    let j = 0;

    while (i < data.length) {
        if (data[i].age > 18 && data[i].favoriteFruit === "apple") {
            newArray[j] = data[i].name;
            j++;
        }
        i++;
    }
    console.log(newArray);
    return newArray;
}

getAdultAppleLovers(data);

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));


function getValues(obj) {
    console.log(Object.values(obj));
    return Object.values(obj);
}

console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}))

function showFormattedDate(dateObj) {
    var options = {year: 'numeric', month: 'short', day: 'numeric'};

    return "It is " + dateObj.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));

// returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)

/*
var dog = new Dog('Sharic', 12);
dog.gav(5);


function call(num) {
    console.log(num+" ");
}
*/

/*function fer(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func.call(arr[i]);
    }
}
var ar = [1,2];
fer(ar,call);*/



