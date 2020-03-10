
var horizon;
var Jump_blocksSpeed;

var score;
var Jump_blockss = [];

var jumper;

function setup() {

  createCanvas(800, 500);

  textAlign(CENTER);

  horizon = height - 40;

	score = 0;
	Jump_blocksSpeed = 6;

	var size = 20;
	jumper = new jumpgame(size * 2, height - horizon, size);

  textSize(20);
}

function draw() {
  background(255);

	drawHoriLine();

	handleLevel(frameCount);

	jumper.update(horizon);

  handleJump_blockss();
}

function handleJump_blockss() {

  for (var i = Jump_blockss.length - 1; i >= 0; i--) {

		Jump_blockss[i].update(Jump_blocksSpeed);
		Jump_blockss[i].draw();

		if (Jump_blockss[i].hits(jumper)) 
			endGame();

    if (!Jump_blockss[i].onScreen) 
      Jump_blockss.splice(i, 1); 
  }
}

/**
	* draws horizon & score
	*/
	function drawHoriLine() {

		/*horizon */
		stroke(111);
		  strokeWeight(2);
		line(0, horizon, width, horizon);
	  
		  /* score */
		noStroke();
		text("Score: " + score, width / 2, 30);
	  
		  
		jumper.draw();
	  }


function newJump_blocks(n) {

	var col = color(random(255), random(255), random(255));
	var size = random(30) + 20;
  var obs = new Jump_blocks(width + size, size, horizon, col);

  Jump_blockss.push(obs);
}

function keyPressed() {

	if ((keyCode === 32 || keyCode === UP_ARROW) && jumper.onGround) // jump if possible
	jumper.jump();
}


	function handleLevel(n) {

		if (n % 30 === 0) { 
	  
		  var n = noise(n); 
	  
		  if (n > 0.5)
			newJump_blocks(n); 
	  
			if (n % 120 === 0) 
			  Jump_blocksSpeed *= 1.05;
		}
	  
		  score++;
	  }

function endGame() {

	noLoop();
  noStroke();
  textSize(40);
  text("GAME OVER!!!", width / 2, height / 2);
  textSize(20);
  text("Nice RUN !!! F5 to PLAY GAME AGAIN", width / 2, height / 2 + 20);
}
