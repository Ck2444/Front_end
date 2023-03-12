// The first task: Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const divSquare = document.createElement("div");
divSquare.id = "mySquare";
divSquare.style.width = "200px";
divSquare.style.height = "200px";
divSquare.style.backgroundColor = "#ff0000";
document.body.append(divSquare);

const button = document.createElement("button");
button.textContent = " Button";
button.style.padding = '5px 10px';
button.style.backgroundColor = 'rgb(38, 38, 38)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.marginBottom = '20px';
document.body.append(button);

const square = document.querySelector("#mySquare");

button.addEventListener("click", function () {
    square.style.backgroundColor = "#00ff00";
    square.style.width = "100px";
    square.style.height = "100px";
});

//The second task: Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const divPinkSquare = document.createElement("div");
divPinkSquare.id = "myPinkSquare";
divPinkSquare.style.width = "200px";
divPinkSquare.style.height = "200px";
divPinkSquare.style.backgroundColor = "#ff9e9e";
document.body.append(divPinkSquare);

const button2 = document.createElement("button");
button2.textContent = "Button2";
button2.style.padding = '5px 10px';
button2.style.backgroundColor = 'rgb(38, 38, 38)';
button2.style.color = '#fff';
button2.style.border = 'none';
button2.style.borderRadius = '5px';
button2.style.cursor = 'pointer';
button2.style.marginBottom = '20px';

document.body.append(button2);

const pinkSquare = document.querySelector("#myPinkSquare");

button2.addEventListener("click", function () {
    pinkSquare.style.backgroundColor = "#0000ff";
    console.log(`New squarecolour is ${pinkSquare.style.backgroundColor}`);
});

//  The third task: Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const divSquare2 = document.createElement("div");
divSquare2.id = "mySquare2";
divSquare2.style.width = "150px";
divSquare2.style.height = "150px";
divSquare2.style.backgroundColor = "#002e11";
document.body.append(divSquare2);

const button3 = document.createElement("button3");
button3.textContent = "Button3";
button3.style.padding = '5px 10px';
button3.style.backgroundColor = 'rgb(38, 38, 38)';
button3.style.color = '#fff';
button3.style.border = 'none';
button3.style.borderRadius = '5px';
button3.style.cursor = 'pointer';
button3.style.marginBottom = '20px';
document.body.append(button3);

const square150 = document.querySelector("#mySquare2");

button3.addEventListener("click", function () {
    const currentWidth = square150.offsetWidth;// получение тикущей ширины 
    const currentHeight = square150.offsetHeight;// полyчение текущей высоты
    const newWidth = currentWidth + 20;
    const newHeight = currentHeight + 20;
    square150.style.width = `${newWidth}px`;
    square150.style.height = `${newHeight}px`;
});

// The fourth task: Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const newDiv = document.createElement("div");
newDiv.classList.add("root");
document.body.append(newDiv);

const button4 = document.createElement("button4");
button4.textContent = "Button4";
button4.style.padding = '5px 10px';
button4.style.backgroundColor = 'rgb(38, 38, 38)';
button4.style.color = '#fff';
button4.style.border = 'none';
button4.style.borderRadius = '5px';
button4.style.cursor = 'pointer';
document.body.append(button4);

button4.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.style.color = "blue";
    newParagraph.textContent = "Some text";
    divSquare.append(newParagraph);
});

// The fifth task: Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const divTaskFirth = document.createElement("div");
divTaskFirth.classList.add("root");
document.body.append(divTaskFirth);

const button5 = document.createElement("button");
button5.textContent = "Button5";
button5.style.padding = '5px 10px';
button5.style.backgroundColor = 'rgb(38, 38, 38)';
button5.style.color = '#fff';
button5.style.border = 'none';
button5.style.borderRadius = '5px';
button5.style.cursor = 'pointer';
document.body.append(button5);

button5.addEventListener('click', function () {
    const blueParagraph = document.createElement('p');
    blueParagraph.style.color = 'blue';
    blueParagraph.innerText = 'The blue paragraph';

    const greenParagraph = document.createElement('p');
    greenParagraph.style.color = 'green';
    greenParagraph.innerText = 'The green paragraph';

    divTaskFirth.append(blueParagraph);
    divTaskFirth.append(greenParagraph);
});