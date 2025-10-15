// Get elements from the DOM
const title = document.getElementById('title');
const description = document.getElementById('description');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');

// Event listener for changing text
changeTextBtn.addEventListener('click', function() {
    title.textContent = 'Text Changed!';
    description.textContent = 'The text has been updated using JavaScript.';
});

// Event listener for changing color
changeColorBtn.addEventListener('click', function() {
    title.style.color = '#ff6b6b';
    description.style.color = '#4ecdc4';
});
