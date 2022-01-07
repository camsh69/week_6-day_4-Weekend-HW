document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector('#delete-all');
    deleteButton.addEventListener('click', handleButtonClick)

})

const handleFormSubmit = function(event) {
    event.preventDefault();

    console.log(event.target);
    console.log(this);

    const list = document.querySelector('#guitar-list');
    
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    list.appendChild(listItem);
    
    const model = document.createElement('h2');
    model.textContent = `Model: ${this.model.value}`;
    listItem.appendChild(model);

    const colour = document.createElement('h3');
    colour.textContent = `Colour: ${this.colour.value}`;
    listItem.appendChild(colour);

    const manufacturer = document.createElement('h3');
    manufacturer.textContent = `Manufacturer: ${this.manufacturer.value}`;
    listItem. appendChild(manufacturer);

    const condition = document.createElement('h4');
    condition.textContent = `Condition: ${this.condition.value}`;
    listItem. appendChild(condition);

    event.target.reset();
}

const handleButtonClick = function() {
    const list = document.querySelector('#guitar-list');
    list.innerHTML = '';
}