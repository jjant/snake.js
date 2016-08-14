function Food(){
	this.draw = function(){
		fill(39);
		rect(this.x, this.y, sqr_size, sqr_size);
	}

	this.random_location = function(){
		this.x = round(random(cols)) * sqr_size;
		this.y = round(random(rows)) * sqr_size;
	}

	this.random_location();
}