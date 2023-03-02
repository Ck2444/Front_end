// The first task: Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const divSquare = document.createElement("div");
divSquare.id = "mySquare";
divSquare.style.width = "200px";
divSquare.style.height = "200px";
divSquare.style.backgroundColor = "#ff0000";
document.body.append(divSquare);

const button = document.createElement("button");
button.textContent = " Buttron";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.append(button);

const square = document.querySelector("#mySquare");

button.addEventListener("click", function () {
    square.style.backgroundColor = "#00ff00";
    square.style.width = "100px";
    square.style.height = "100px";
});

//The second task: Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const divSquare = document.createElement("div");
divSquare.id = "mySquare";
divSquare.style.width = "200px";
divSquare.style.height = "200px";
divSquare.style.backgroundColor = "#ff9e9e";
document.body.append(divSquare);

const button = document.createElement("button");
button.textContent = "Кнопка";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.append(button);

const square = document.querySelector("#mySquare");

button.addEventListener("click", function () {
    square.style.backgroundColor = "#0000ff";
    console.log(`New squarecolour is ${square.style.backgroundColor}`);
});

//  The third task: Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const divSquare = document.createElement("div");
divSquare.id = "mySquare";
divSquare.style.width = "150px";
divSquare.style.height = "150px";
divSquare.style.backgroundColor = "#002e11";
document.body.append(divSquare);

const button = document.createElement("button");
button.textContent = "Кнопка";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.append(button);

const square = document.querySelector("#mySquare");

button.addEventListener("click", function () {
    const currentWidth = square.offsetWidth;// получение тикущей ширины 
    const currentHeight = square.offsetHeight;// полу
    const newWidth = currentWidth + 20;
    const newHeight = currentHeight + 20;
    square.style.width = `${newWidth}px`;
    square.style.height = `${newHeight}px`;
});

// The fourth task: Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const divSquare = document.createElement("div");
divSquare.classList.add("root");
document.body.append(divSquare);

const button = document.createElement("button");
button.textContent = "Кнопка";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.append(button);

button.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.style.color = "blue";
    newParagraph.textContent = "Some text";
    divSquare.append(newParagraph);
});

// The fifth task: Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const div = document.createElement("div");
div.classList.add("root");
document.body.append(div);

const button = document.createElement("button");
button.textContent = "Кнопка";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
document.body.append(button);

button.addEventListener('click', function () {
    const blueParagraph = document.createElement('p');
    blueParagraph.style.color = 'blue';
    blueParagraph.innerText = 'The blue paragraph';

    const greenParagraph = document.createElement('p');
    greenParagraph.style.color = 'green';
    greenParagraph.innerText = 'The green paragraph';

    div.append(blueParagraph);
    div.append(greenParagraph);
});