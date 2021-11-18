const body = document.getElementsByTagName('body');
const appRoot = document.getElementById('app-root');

function appRootContain() {
    let chooseRL = document.createElement('div');

    let labelTitle = document.createElement('label');
    let inputReg = document.createElement('input');


    let labelInputReg = document.createElement('label');
    let inputLang = document.createElement('input');
    inputReg.className = 'inputLang';
    let labelInputLang = document.createElement('label');


    inputReg.onclick = runReg;
    inputLang.onclick = runLang;
    chooseRL.append(labelTitle);
    chooseRL.append(inputReg);
    chooseRL.append(labelInputReg);
    chooseRL.append(inputLang);
    chooseRL.append(labelInputLang);

    appRoot.append(chooseRL);

}

appRootContain();
let dataLang = externalService.getLanguagesList();


function runReg() {
    dropdownListOfCountres();


    console.log(dataLang)
    console.log(externalService.getCountryListByLanguage("English"))
}

function runLang() {
    dropdownListOfLanguijes();
}

function selectLang(cantry) {

}

function addTalbeByCantryArray(canties) {
    canties = externalService.getCountryListByLanguage();

    let table = document.createElement('table');
    table.id = 'tableID';
    let tbody = document.createElement('tbody');
    let thead = document.createElement('thead');

    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");


    let td = document.createElement("td");
    td.innerHTML = 'adwaw';
    let tr = document.createElement('tr');
    tr.innerHTML='qqqqq';
    table.append(td);
    table.append(tr);

    //tbody.append(td);
    //table.append(tbody);
    appRoot.append(table)



}


addTalbeByCantryArray();

function dropdownListOfCountres() {
    let dropdown = document.createElement('div');
    dropdown.id = "ropdownListOfCountres";
    let labelDr = document.createElement('label');
    let dropdownPane = document.createElement('select');
    dropdownPane.className = 'selectPane';
    let atr = externalService.getRegionsList();

    dropdownPane.options.length = 1;
    dropdownPane.options[0].text = 'Select value';
    for (let i = 0; i < atr.length; i++) {
        dropdownPane.options[dropdownPane.options.length] = new Option(atr[i]);
    }

    //dropdownPane.options[dropdownPane.options.length] = new Option(externalService.getRegionsList());
    /*let option = document.createElement('option');
    let option2 = document.createElement('option');

    option.value = atr[0];
    option.value = atr[1];*/

    dropdown.append(labelDr);
    dropdown.append(dropdownPane);

    appRoot.append(dropdown);


}

function dropdownListOfLanguijes() {
    let dropdown = document.createElement('div');
    let select = document.createElement('select');
    select.className = 'selectPane';
    let atr = externalService.getLanguagesList();

    select.options.length = 1;
    select.options[0].text = 'Select value';
    for (let i = 0; i < atr.length; i++) {
        select.options[select.options.length] = new Option(atr[i]);
    }

    dropdown.append(select);
    appRoot.append(dropdown);
}

externalService.getRegionsList();


function typeOfSearch() {

    let labelTitle = appRoot.firstElementChild.firstElementChild;
    labelTitle.innerHTML = 'Please choose the type of search:';

    let inputReg = appRoot.firstElementChild.firstElementChild.nextElementSibling;
    inputReg.setAttribute('type', "radio");
    inputReg.setAttribute('name', "name1");

    let labelInputReg = appRoot.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
    labelInputReg.innerHTML = 'By Region';

    let inputLang = appRoot.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    inputLang.setAttribute('type', "radio");
    inputLang.setAttribute('name', "name1");

    let labelInputLang = appRoot.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    labelInputLang.innerHTML = 'By Language';



}

typeOfSearch();

/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/
