let toDoListArray = []; // todo list array
const form = document.querySelector(".form");
const input = document.querySelector(".form_input");
const ul = document.querySelector(".todoList");

// event Listeners
form.addEventListener("submit", (e) => {
    // to reload page
    e.preventDefault(); 
    // give an item a unique Id
    let itemId = String(Date.now());
    // assign input value
    let toDoItem = input.value;
    // pass Id and Item in functions
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    // this is to clear the input box
    input.value =  " ";
});

ul.addEventListener("click", (e) =>{
    let id = e.target.getAttribute("data-id");
    // if user clicked in something else, it will return
    if (!id) return;
    // pass id through the functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
});

// functions
const addItemToDOM = (itemId, toDoItem) => {
    // create a list
    const li = document.createElement("li");
    li.setAttribute("data-id", itemId);
    // add todoItem text to list
    li.innerText = toDoItem;
    // add list to the DOM
    ul.appendChild(li);
}

const addItemToArray = (itemId, toDoItem) => {
    // add item to array as an object with an Id so we can find and delete it later
    toDoListArray.push(itemId, toDoItem);
    console.log(toDoListArray);
}

const removeItemFromDOM = (id) => {
    // get the list item by data Id
    var li = document.querySelector('[data-id = "'+ id +'"]');
    // remove list item
    ul.removeChild(li);
}

const removeItemFromArray = (id) => {
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);
}