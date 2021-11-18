
function getAge(ageOfPerson, ageOfSecondPerson) {
    let currentAge = 0;
   //let temp = 0;
    let currentEar = 2020;
    //10 30 =30-10
    //1y 1m 1d 1h 1min
    //1y 1m 1d 2h 1min

    let temp = ageOfPerson.getTime();

    let temp2 = ageOfSecondPerson.getTime();// with hight year
    let differenceMillsec =0;

    if (temp>temp2)
        differenceMillsec = temp - temp2;
    else
        differenceMillsec = temp2 - temp;

    var date = new Date(differenceMillsec);

    alert(currentAge+" "+"(assuming today is the "+ ageOfPerson.getDate()+" "+ageOfPerson.toLocaleString("en-US", { month: 'long' })+")");

    alert(differenceMillsec/1000/60/60/24/365);
   // var  intercalary_year = ageOfSecondPerson.getDate().getFullYear()-ageOfPerson.getDate().getFullYear()//2021 - 1998(2000) /===21/4 =5
    return differenceMillsec/1000/60/60/24/365;//whothout hight year

}

const birthday22 = new Date(2021, 9, 22);
const birthday23 = new Date(2000, 9, 22);

getAge(birthday22, birthday23); // 20 (assuming today is the 22nd October)
//getAge(birthday23); // 19 (assuming today is the 22nd October)

//2. Write a function that accepts a date/timestamp and returns a textual representation of the corresponding
// weekday (i.e. 'Monday', 'Tuesday', etc.).
// For the sake of the task, let’s assume that the input is always a valid date object or a timestamp.

function getWeekDay(date) {
    let weekDay = 0;
    weekDay = date.getFullYear();
    alert(weekDay);
}

getWeekDay(Date.now()); // "Thursday" (if today is the 22nd October)
getWeekDay(new Date(2020, 9, 22)); // "Thursday"