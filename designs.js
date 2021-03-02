// define variables from DOM
// Select color input
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
// Select size input
const sizePicker = document.getElementById('sizePicker');

//make a default Grid
const inputheight = document.getElementById('inputHeight').value;
const inputwidth = document.getElementById('inputWidth').value;
makeGrid(inputheight, inputwidth);




sizePicker.addEventListener('click', (e) => {
    e.preventDefault();
    const inputheight = document.getElementById('inputHeight').value;
    const inputwidth = document.getElementById('inputWidth').value;
    table.firstChild.remove();
    makeGrid(inputheight, inputwidth);

});

// When size is submitted by the user, call makeGrid()

function makeGrid(inputheight, inputwidth) {

for (let x = 0; x <= inputheight; x++){
    let row = table.insertRow(x);
    for (let y = 0; y <= inputwidth; y++){
        let cell = row.insertCell(y);
        cell.addEventListener('click', (e) => {
            console.log(e);
            cell.style.backgroundColor = color.value;
        });
    }
}

// Your code goes here!

}
