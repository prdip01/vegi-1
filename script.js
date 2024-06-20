function addVegetable() {
    const vegetableSelect = document.getElementById('vegetable');
    const weightSelect = document.getElementById('weight');
    const vegetableList = document.getElementById('vegetable-list');

    const vegetable = vegetableSelect.value;
    const weight = weightSelect.value;

    const listItem = document.createElement('li');
    listItem.textContent = `${vegetable} - ${weight}`;

    vegetableList.appendChild(listItem);
}

function resetList() {
    const vegetableList = document.getElementById('vegetable-list');
    vegetableList.innerHTML = '';
}
