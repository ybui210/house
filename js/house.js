var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");

var a = house() + drawSmoke();

var a;
var speed;
function adjustSpeed() {
	clearInterval(a);
	speed = parseInt(document.getElementById('slider').value);
	a = setInterval(function () { animate() }, (speed * 10));

	document.getElementById('display').innerHTML = speed;

}

var interval = setInterval(function () { animate() }, 1000);
var x = 0;
var y = 15;
function animate() {

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	house();
	drawSmoke();

	y -= 5;
	if (y < 0) {
		y = 140;
	}
}


function house() {

	drawBackground();
	drawMountain();
	drawHills();
	drawBase();
	drawChimney();
	drawRoof();
	drawDoor();
	drawWindows();
	drawSun();
	drawSteps();

}

//BACKGROUND (sky and land)
function drawBackground() {

	ctx.fillStyle = "#40C4FF";
	ctx.fillRect(0, 0, 500, 280);
	ctx.fillStyle = "#166602";
	ctx.fillRect(0, 280, 500, 200);
}

function drawHills() {
	ctx.beginPath();
	ctx.fillStyle = "#31B90F";
	ctx.arc(230, 820, 500, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.closePath();
}
//DRAW BASE
function drawBase() {
	ctx.beginPath();
	ctx.moveTo(60, 320);
	ctx.lineTo(105, 260);
	ctx.lineTo(160, 340);
	ctx.lineTo(160, 440);
	ctx.lineTo(60, 420);
	ctx.lineTo(60, 320);
	ctx.closePath();
	//ctx.fillStyle="#C62828";
	//ctx.fillStyle="#c2c2a3";
	ctx.fillStyle = "#FFF2dF";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(160, 340);
	ctx.lineTo(280, 300);
	ctx.lineTo(280, 400);
	ctx.lineTo(160, 440);
	ctx.lineTo(160, 340);
	ctx.closePath();
	//ctx.fillStyle="#B71C1C";
	//ctx.fillStyle="#999966";
	ctx.fillStyle = "#f1e3dd";
	ctx.fill();

	//SIDE right

	ctx.beginPath();
	ctx.moveTo(335, 260);
	ctx.lineTo(375, 310);
	ctx.lineTo(375, 410);
	ctx.lineTo(300, 445);
	ctx.lineTo(300, 332);
	ctx.lineTo(335, 260);
	ctx.closePath();
	ctx.fill();



	//left

	ctx.beginPath();
	ctx.moveTo(300, 445);
	ctx.lineTo(300, 332);
	ctx.lineTo(205, 300);
	ctx.lineTo(205, 425);
	ctx.lineTo(300, 445);
	ctx.closePath();
	ctx.fillStyle = "#FFF2dF";
	ctx.fill();
}

//DRAW ROOF
function drawRoof() {
	ctx.beginPath();
	ctx.moveTo(100, 250);
	ctx.lineTo(40, 325);
	ctx.lineTo(50, 335);
	ctx.lineTo(105, 260);
	ctx.lineTo(100, 250);
	ctx.closePath();
	ctx.fillStyle = "#7f7168";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100, 250);
	ctx.lineTo(250, 200);
	ctx.lineTo(300, 300);
	ctx.lineTo(150, 350);
	ctx.lineTo(100, 250);
	ctx.closePath();
	ctx.fillStyle = "#7f7168";
	ctx.fill();

	////////////////////////////////////

	ctx.beginPath();
	ctx.moveTo(205, 332);
	ctx.lineTo(220, 250);
	ctx.lineTo(340, 250);
	ctx.lineTo(295, 347);
	ctx.lineTo(205, 337);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(340, 250);
	ctx.lineTo(335, 260);
	ctx.lineTo(380, 320);
	ctx.lineTo(385, 310);
	ctx.moveTo(340, 250);
	ctx.closePath();
	ctx.fill();

	////////////////////////////////////

	ctx.beginPath();
	ctx.moveTo(205, 332);
	ctx.lineTo(220, 250);
	ctx.lineTo(340, 250);
	ctx.lineTo(295, 347);
	ctx.lineTo(205, 337);
	ctx.closePath();
	ctx.fillStyle = "#96897f";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(340, 250);
	ctx.lineTo(335, 260);
	ctx.lineTo(380, 320);
	ctx.lineTo(385, 310);
	ctx.moveTo(340, 250);
	ctx.closePath();
	ctx.fillStyle = "#7f7168";
	ctx.fill();
}

//DRAW CHIMNEY
function drawChimney() {
	ctx.beginPath();
	ctx.moveTo(170, 260);
	ctx.lineTo(200, 250);
	ctx.lineTo(200, 190);
	ctx.lineTo(170, 200);
	ctx.lineTo(170, 260);
	ctx.closePath();
	ctx.fillStyle = "#7a7a52";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(170, 200);
	ctx.lineTo(170, 260);
	ctx.lineTo(150, 240);
	ctx.lineTo(150, 185);
	ctx.lineTo(170, 200);
	ctx.closePath();
	ctx.fillStyle = "#999966";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(150, 185);
	ctx.lineTo(170, 200);
	ctx.lineTo(200, 190);
	ctx.lineTo(180, 175);
	ctx.lineTo(150, 185);
	ctx.closePath();
	ctx.fillStyle = "#5C5C3D";
	ctx.fill();
}

//Draw Door

function drawDoor() {
	ctx.beginPath();
	ctx.moveTo(130, 435);
	ctx.lineTo(80, 425);
	ctx.lineTo(80, 360);
	ctx.lineTo(130, 370);
	ctx.lineTo(130, 435);

	ctx.closePath();
	ctx.fillStyle = "#ffcc00";
	ctx.fill();
}

//Draw windows

function drawWindows() {
	ctx.strokeStyle = "#F0CC19";
	ctx.moveTo(230, 360);
	ctx.lineTo(280, 366);
	ctx.lineTo(280, 410);
	ctx.lineTo(230, 400);
	ctx.lineTo(230, 360);
	ctx.closePath();
	ctx.stroke();
	ctx.lineWidth = 5;

	ctx.fillStyle = "#ffcc00";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(255, 363);
	ctx.lineTo(255, 405);
	ctx.closePath();
	ctx.strokeStyle = "#F0CC19";
	ctx.lineWidth = 3;
	ctx.stroke();
}

function drawSun() {
	ctx.beginPath();
	ctx.arc(0, 0, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = "yellow";
	ctx.fill();
}

function drawMountain() {
	ctx.beginPath();
	ctx.moveTo(0, 280);
	ctx.lineTo(300, 150);
	ctx.lineTo(400, 150);
	ctx.lineTo(700, 280);
	ctx.closePath();
	ctx.fillStyle = "#3E475B";
	ctx.fill();

	//SNOW
	ctx.beginPath();
	ctx.moveTo(400, 150);
	ctx.lineTo(300, 150);
	ctx.lineTo(200, 194);
	ctx.lineTo(310, 160);

	ctx.lineTo(300, 210);
	ctx.lineTo(330, 165);

	ctx.lineTo(345, 220);
	ctx.lineTo(355, 170);

	ctx.lineTo(385, 240);
	ctx.lineTo(390, 167);

	ctx.lineTo(440, 210);
	ctx.lineTo(420, 170);

	ctx.lineTo(480, 183);
	ctx.closePath();
	ctx.fillStyle = "white";
	ctx.fill();
}

function drawSteps() {
	ctx.beginPath();
	ctx.moveTo(70, 440);
	ctx.lineTo(120, 450);
	ctx.lineTo(105, 460);
	ctx.lineTo(55, 450);
	ctx.closePath();
	ctx.fillStyle = "#414242";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(40, 460);
	ctx.lineTo(90, 470);
	ctx.lineTo(75, 480);
	ctx.lineTo(25, 470);
	ctx.lineTo(40, 460);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(10, 480);
	ctx.lineTo(60, 490);
	ctx.lineTo(45, 500);
	ctx.lineTo(-5, 490);
	ctx.lineTo(10, 480);
	ctx.closePath();
	ctx.fill();
}

var y1 = 15;
var rad1 = 2;
var y2 = 25;
var rad2 = 4;
var y = 140;
var r = 8;
function drawSmoke() {


	ctx.beginPath(); // right
	ctx.arc(190, y - 5, r, 0, 2 * Math.PI);
	ctx.fillStyle = "#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(175, y, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle = "#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(170, y - 5, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle = "#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(185, y, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle = "#989898";
	ctx.fill();

	ctx.beginPath(); //top
	ctx.arc(180, y - 5, r + 2, 0, 2 * Math.PI);
	ctx.fillStyle = "#989898";
	ctx.fill();


	y -= 5;
	r += 2;
	if (y < 0) {
		y = 145;
		r = 8;
	}
}