// Объявление переменных
const myBtn = document.querySelector("#myBtn");
const nameInput = document.querySelector("#name");
const list = document.querySelector("#list");
const divv = document.querySelector(".divv");
const btnNo = document.querySelector(".btnNo");
const btnDell = document.querySelector(".btnDell");
// Обработчик события кнопки
myBtn.addEventListener('click', () => {
    // Создание элемента li (в памяти, на странице его пока нет)
    const newItem = document.createElement('li');
    // Добавить элементу newItem класс item
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля ввода
    newItem.textContent = nameInput.value

    // Добавить элемент в список
    list.appendChild(newItem);

    // Очистить поле ввода
    nameInput.value = "";
    //создание кнопки для удаления элемента
    let deleteButton = document.createElement("button");
    //добавление текста к кнопке
    deleteButton.textContent = "удалить";

    deleteButton.classList.add("del")
    //добавть в эл списка
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        // list.removeChild(newItem);
        divv.classList.add("divvv")

    })
    btnNo.addEventListener("click", () => {
        // list.removeChild(newItem);
        divv.classList.remove("divvv")

    })
    btnDell.addEventListener("click", (event) => {
        // list.removeChild(newItem);
        divv.classList.remove("divvv")
        newItem.classList.add("new")
        deleteButton.classList.add("btndelllle")

    })


})
