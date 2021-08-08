let grid;
let rows;
let cols;
let resolution = 25;


/** Function creating 2D array
 * param rows int number of rows
 * param cols int number of columns
 * return 2D array
 */
function make2DArray(rows, cols)
{
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++)
	{
		arr[i] = new Array(rows);
	}
	return arr;
}

/** Function that fill grid with random number - 0 or 1
 * param grid 2D array
 * return void
 */
function randomSetup(grid)
{
	for (let i = 0; i < cols; i++)
	{
		for (let j = 0; j < rows; j++)
		{
			grid[i][j] = floor(random(2));
		}
	}
}


function setup()
{
	createCanvas(600, 400);
	rows = floor(height / resolution);
	cols = floor(width / resolution);

	grid = make2DArray(rows, cols);
	randomSetup(grid);
}

function draw()
{
	background(0);
	for (let i = 0; i < cols; i++)
	{
		for (let j = 0; j < rows; j++)
		{
			let x = i * resolution;
			let y = j * resolution;
			if(grid[i][j] == 1)
			{
				stroke(255);
				fill(255);
				rect(x, y, resolution-2, resolution-2);

			}
		}
	}
}
