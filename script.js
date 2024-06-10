document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('resetButton');
    const gridSize = 16;

    function createGrid(size) {
        container.innerHTML = '';
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${960 / size}px`;
            square.style.height = `${960 / size}px`;
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
            container.appendChild(square);
        }
    }

    createGrid(gridSize);

    resetButton.addEventListener('click', () => {
        let newSize = prompt('Enter new grid size (maximum 100):');
        if (newSize > 100) newSize = 100;
        if (newSize < 1) newSize = 1;
        createGrid(newSize);
    });
});
