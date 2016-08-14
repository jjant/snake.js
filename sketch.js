var w = 640;
var h = w * 9 / 16;
var sqr_size = 20;

var rows = h / sqr_size;
var cols = w / sqr_size;

var snake;
var food;

function setup() {
	createCanvas(w, h);
	frameRate(10);

	snake = new Snake();
	food = new Food();
}


function keyPressed(){	//refactor l8r
	snake.move(keyCode);
}

function draw() {
	background(200);
	borders();

	food.draw();
	snake.update();
	snake.draw();

	if(snake.x == food.x && snake.y == food.y){
		snake.eat();
		food.random_location();
	}

	if (snake.tail_here(snake.x, snake.y)) { 
		lose();
	}
	if (snake.x == 0 || snake.x == (cols - 1) * sqr_size|| snake.y == 0 || snake.y == (rows - 1) * sqr_size){
		lose();
	}
}

function borders(){
	for (var x = 0; x < cols; x++){
		fill(81);
		rect(x * sqr_size, 0, sqr_size, sqr_size);
		fill(81);
		rect(x * sqr_size, (rows - 1) * sqr_size, sqr_size, sqr_size);
	}

	for (var y = 1; y < rows - 1; y++){
		fill(81);
		rect(0, y * sqr_size, sqr_size, sqr_size);
		fill(81);
		rect((cols - 1) * sqr_size,  y * sqr_size, sqr_size, sqr_size);
	}
}

function lose(){
	alert("You've lost!"); //hacer algo mas.
	restart_game();
}

function restart_game(){
	snake = new Snake();
}