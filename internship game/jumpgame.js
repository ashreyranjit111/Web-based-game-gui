function jumpgame(x, y, radius) {

	this.x = x;
	this.y = y;

	this.yVelocity = 0;
	this.speed = 1;
	this.onGround = true;

	this.radius = radius; 
}

	jumpgame.prototype.update = function(platform) {

	var bottom = this.y + this.radius; 
	var nextBottom = bottom + this.yVelocity; 

  if (bottom <= platform && nextBottom >= platform) { 
		this.yVelocity = 0; 
		this.y = platform - this.radius; 
		this.onGround = true;
  } else if (platform - bottom > 1) { 
		this.yVelocity += this.speed; 
		this.onGround = false;
  }

	/* movement */
	this.y += this.yVelocity;
};


	jumpgame.prototype.jump = function() {

	this.yVelocity = -(this.radius * 0.7); 
};

jumpgame.prototype.draw = function() {

  fill('pink');
	stroke(255);
	strokeWeight(2);
  ellipse(this.x, this.y, this.radius * 2);
};
