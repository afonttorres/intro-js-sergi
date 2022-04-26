let name = 'Agnes';
//console.log(typeof name);

let nameArr = ['Agnes', 'Nil', 'Sira', 'Rafa', 'Eva', 'Esther', 'SW']
for (let item of nameArr) {
    //console.log(item)
}

const user = {
    name: 'Agnès',
    age: 27,
    msg: `Hi, I'm ${name}`,
    //mètode
    saludar: function sayHi() {
        //console.log(this.msg)
    }
}

function sumaArray(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        let numero = arr[i];

        if (typeof numero === 'number') suma += numero
    }

    return suma;
}

// function renderToDos(arr) {
//     const list = document.getElementById('list');

//     arr.forEach(el => {
//         let listItem = document.createElement('li');
//         listItem.innerText = el;
//         listItem.classList.add('li_unclicked')
//         listItem.onclick = () => {
//             listItem.classList.toggle('li_clicked')
//         }
//         list.appendChild(listItem);
//     });

// }

function toggleClass(e){
    e.target.classList.toggle('li_clicked');
}

function createToDo(el) {
    const list = document.getElementById('list');
    let element = `<li class="li_unclicked" onclick="toggleClass(event)">${el}</li>`
    
    list.innerHTML += element
}

function printToDo(arr) {
   arr.map((el) => createToDo(el));
}

function init() {
    user.saludar();

    let numArray = [2, 5, 6, 4, 88, 21, 37]
    let resultatSumaArr = sumaArray(numArray)
    console.log(resultatSumaArr);

    let toDoList = [
        'Llevar-se',
        'Treure a passejar el gos',
        'Fer classe',
        'Cafè',
        'Fer classe',
        'Dinar',
        'Fer classe',
        'Anar al gimnàs',

    ]
    //renderToDos(toDoList);
    printToDo(toDoList);
}

init();