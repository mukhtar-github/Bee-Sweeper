
function make2DArray(col, row) {
    var arr = new Array(col);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(row);
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 20;

function setUp() {
    createCanvas(200, 200);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(20, 20);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell();
        }
    }
}

function draw() {
    background(0);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}


