function Snake() {
	this.x = rows/2 * sqr_size;
	this.y = cols/2 * sqr_size;

	this.x_speed = 1;
	this.y_speed = 0;

	this.size = 1;

	this.tail = [[0,0]];

	this.direction = function(x_speed, y_speed){
		this.x_speed = x_speed;
		this.y_speed = y_speed;
	}

	this.update = function(){

		this.tail[this.size - 1] =[this.x, this.y];

		for (var i = 0; i < this.size - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}

		this.x += this.x_speed * sqr_size;
		this.y += this.y_speed * sqr_size;

		this.tail[this.size-1] = [this.x, this.y];
	}

	this.draw = function(){
				console.log(this.tail);
		for(var i = 0; i < this.size; i++) {
			fill(255);
			rect(this.tail[i][0], this.tail[i][1], sqr_size, sqr_size);
		}
	}

	this.eat = function(){
		this.size += 1;
	}

}
