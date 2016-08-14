function Food(){
	this.draw = function(){
		fill(39);
		rect(this.x, this.y, sqr_size, sqr_size);
	}

	this.random_location = function(){
		this.x = round(random(1, cols - 2)) * sqr_size;
		this.y = round(random(1, rows - 2)) * sqr_size;
	}

	this.random_location();
}