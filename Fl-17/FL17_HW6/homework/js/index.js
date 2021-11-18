let main_window = window.localStorage;

function visitLink(path) {
    save(path);
}

function save(key) {
    let counter = main_window.getItem(key);

    if (counter === null) {
        counter = 1;
    } else {
        counter = parseInt(counter);
        counter++;
    }
    main_window.setItem(key, counter);
}

function viewResults() {
    var div = document.getElementById("count_container");
    if(div == null )
    {
        div = document.createElement('div');
        div.id = "count_container";
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');

        ul.append(li1, li2, li3);
        li1.innerText = 'You visited Page1 ' + main_window.getItem('Page1') + ' time(s)';
        li2.innerText = 'You visited Page2 ' + main_window.getItem('Page2') + ' time(s)';
        li3.innerText = 'You visited Page3 ' + main_window.getItem('Page3') + ' time(s)';

        div.append(ul);
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
    } else{
        div.firstElementChild.firstElementChild.innerHTML = 'You visited Page1 ' + main_window.getItem('Page1') + ' time(s)';
        div.firstElementChild.firstElementChild.nextElementSibling.innerHTML = 'You visited Page2 ' + main_window.getItem('Page2') + ' time(s)';
        div.firstElementChild.lastElementChild.innerHTML = 'You visited Page3 ' + main_window.getItem('Page3') + ' time(s)';
    }

    return document.body.append(div);
}
