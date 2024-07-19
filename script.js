const container = document.querySelector('.container'); 
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
let boxes;
const cols = Math.floor(container.clientWidth / 16);
const rows = Math.floor(container.clientHeight / 16);
console.log(container.clientWidth/16, container.clientHeight/16);

let isMouseDown = false;
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // 0 is the left mouse button
        isMouseDown = true;
      }
})
document.addEventListener('mouseup', ()=>{
    isMouseDown = false;
})
function createGrid(pixelCount){
    let pixelWidth = 600 / pixelCount + 'px';
    let pixelHeight = 600 / pixelCount + 'px';
    for (let i = 0; i < pixelCount * pixelCount; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = pixelWidth; // adjust width based on number of columns
        box.style.height = pixelHeight; // adjust height based on number of rows
        boxes = document.querySelectorAll('.box');
        container.appendChild(box);
        console.log('append');
    }
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (isMouseDown){
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                box.style.background = '#' + randomColor;
            }
        })
        box.addEventListener('mousedown', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            box.style.background = '#' + randomColor;
        })
        }
    )
    // container.addEventListener('mouseover', (e) => {
    //     let target = e.target;
    //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //     target.style.backgroundColor = '#' + randomColor;
    // })
}
function changeColor(){

}

function changeGrid(){
    const gridsize = document.querySelectorAll('.box');
    let newgridsize = prompt('Input new grid: ');
    if (newgridsize != null && newgridsize >= 0){
        gridsize.forEach((box) => {
            box.remove();
        })
        createGrid(newgridsize);
    }
    else{
        alert('Gridsize must be > 0');
    }
}

function resetGrid(){
    boxes.forEach((box) => {
            box.style.background = null;
        }
    )
}
change.addEventListener('click', changeGrid);
reset.addEventListener('click', resetGrid);
createGrid(20);

