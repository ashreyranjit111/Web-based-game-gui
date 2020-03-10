function Jump_blocks(x, size, horizon, color) {

  this.x = x;
	this.y = horizon - size;

  this.size = size;
  this.color = color;

	this.onScreen = true;
}


Jump_blocks.prototype.update = function(speed) {

	
	this.onScreen = (this.x > -this.size);

	
	this.x -= speed;
};

Jump_blocks.prototype.draw = function() {

	fill(this.color);
	stroke(1);
	strokeWeight(2);
	rect(this.x, this.y, this.size, this.size);
};


Jump_blocks.prototype.hits = function(jumper) {

	var halfSize = this.size / 2;
	var minimumDistance = halfSize + (jumper.radius); 

	
	var xCenter = this.x + halfSize;
	var yCenter = this.y + halfSize;

	var distance = dist(xCenter, yCenter, jumper.x, jumper.y); 

	return (distance < minimumDistance); 
};
