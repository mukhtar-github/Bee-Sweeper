
function make2DArray(col, row) {
    let arr = new Array(col);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(row);
    }
}

function Cell() {
    this.bee = true;
    this.revealed = true;
}

let grid;
let col = 20;
let row = 20;

function setUp() {
    createCanvas(200, 200);
    grid = make2DArray(20, 20);
}

function draw() {

}