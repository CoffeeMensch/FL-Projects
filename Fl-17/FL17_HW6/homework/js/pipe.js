function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

}

/*const pipe = (value, ...funcs) => {
    /!*let fun = (...funcs) => (value) => {
        return funcs.reduce(fun) => {
            return fun(value);
        }
    }*!/
};*/

var rep = function (value) {
    return value.replace(/_/g, ' ');
}

// const pipe = ( value,...funcs) => (value) => {
//     return funcs.reduce((value, funcs) => {
//         return funcs(value);
//     }, value)
//
// }

var pipe = (val, ...fns) => (x) => fns.reduce((v, f) => f(val), x);

/*let vulF = (value) => (arg) => value(arg);
let funk = (...funcs) => funcs.reduce(vulF);
return funk;*/

/*
const _pipe = (a, b) => (arg) => b(a(arg));
const pipe = (...ops) => ops.reduce(_pipe);
*/

/*
 let argums = (funcs) => funcs.reduce(value);
        return argums;*/

//const _pipe = (a, b) => (arg) => b(a(arg));
// const pipe = (...ops) => ops.reduce(_pipe)


/*  let bundle = funcs.reduce((prevOp, nextOp) => {
       return pipe(prevOp, nextOp);
   });
   return bundle;*/

// return funcs.reduce((currentValue, currentFunction) => {
//debugger;

//    return currentFunction(currentValue);
//}, value);


/*
Implement PIPE function.
1) The function is supposed to accept the following arguments: value and a sequence of functions.

2)Each of the functions should operate on the provided value and pass the output to the other function in a sequence.
*/

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');

const capitalize = (value) => value.split(' ').map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join(' ');

const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!

/*
Task 2.

Implement PIPE function.

2)Each of the functions should operate on the provided value and pass the output to the other function in a sequence.

3)In case provided argument is not a function, pipe should immediately throw an error and stop the execution.

*/

getName = (person) => person.name;

getName({name: 'Buckethead'});
// 'Buckethead'