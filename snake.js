function Snake() {
	this.x = cols * sqr_size / 2;
	this.y = rows * sqr_size /2;

	this.x_speed = 1;
	this.y_speed = 0;

	this.size = 1;

	this.tail = [[this.x, this.y]];

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
		for(var i = 0; i < this.size; i++) {
			fill(255);
			rect(this.tail[i][0], this.tail[i][1], sqr_size, sqr_size);
		}
	}

	this.eat = function(){
		this.size += 1;
	}

	this.tail_here = function(x, y){
		for (var i = 0; i < this.size - 2 ; i++) {
			console.log(this.tail[i]);
			if(this.tail[i][0] == x && this.tail[i][1] == y)
				return true;
		}
		return false;
	}

	this.move = function(key){
		if(keyCode == LEFT_ARROW){
			x_dir = -1;
			y_dir = 0;
		}
		else if(keyCode == RIGHT_ARROW){
			x_dir = 1;
			y_dir = 0;
		}
		else if(keyCode == UP_ARROW){
			x_dir = 0;
			y_dir = -1;
		}
		else if(keyCode == DOWN_ARROW){
			x_dir = 0;
			y_dir = 1;
		}

		next_x = this.x + x_dir * sqr_size;
		next_y = this.y + y_dir * sqr_size;

		// Prevents the player from being able to step on it's neck.
		if(this.tail[this.size - 2]){
			if(next_x == this.tail[this.size - 2][0] && next_y == this.tail[this.size - 2][1]) // If next position would be the neck.
				return;
		}
		
		this.direction(x_dir, y_dir);
	}
}
