var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");

var a = house() + drawSmoke();

var a;
var speed;
function adjustSpeed() {
	clearInterval(a);
	speed= parseInt(document.getElementById('slider').value);
	a = setInterval(function() {animate()}, (speed * 10));

<<<<<<< HEAD
	document.getElementById('display').innerHTML = speed;

}

var interval = setInterval(function() {animate()}, 1000);
var x = 0;
var y = 15;
function animate() {

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	house();
	drawSmoke();

	y-=5;
	if (y < 0) {
		y = 140;
	}
}


function house() {

	drawBackground();
	drawBackground();
=======
	drawBackground();	
	drawMountain();
	drawHills();
>>>>>>> 32724a7877a719af323e6e679346f72183bdd436
	drawBase();
	drawChimney();
	drawRoof();
	drawDoor();
	drawWindows();
<<<<<<< HEAD

=======
	drawSun();
	drawSteps();
	
>>>>>>> 32724a7877a719af323e6e679346f72183bdd436
}

//GRASS
function drawBackground () {
<<<<<<< HEAD

	//ctx.fillStyle="#40C4FF";
	ctx.fillStyle = "#87CEFA";
	ctx.fillRect(0,0,500,500);
	//ctx.fillStyle="#76FF03";
	ctx.fillStyle = "#BDB76B";
	ctx.fillRect(0,320,500,180);
=======
	ctx.fillStyle="#40C4FF";
	ctx.fillRect(0,0,500,280);
	ctx.fillStyle="#166602";
	ctx.fillRect(0,280,500,200);
>>>>>>> 32724a7877a719af323e6e679346f72183bdd436

}

function drawHills() {
	/*ctx.beginPath();
	ctx.fillStyle="#D1BE1F";
	ctx.arc(110,750,500,0,Math.PI*2,true);
	ctx.fill();
	ctx.closePath();*/
	ctx.beginPath();
	ctx.fillStyle="#31B90F";
	ctx.arc(230,820,500,0,Math.PI*2,true);
	ctx.fill();
	ctx.closePath();
}
//DRAW BASE
function drawBase() {
	ctx.beginPath();
	ctx.moveTo(60,320);
	ctx.lineTo(105,260);
	ctx.lineTo(160,340);
	ctx.lineTo(160,440);
	ctx.lineTo(60,420);
	ctx.lineTo(60,320);
	ctx.closePath();
	//ctx.fillStyle="#C62828";
	//ctx.fillStyle="#c2c2a3";
	ctx.fillStyle="#FFF2dF";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(160,340);
	ctx.lineTo(280,300);
	ctx.lineTo(280,400);
	ctx.lineTo(160,440);
	ctx.lineTo(160,340);
	ctx.closePath();
	//ctx.fillStyle="#B71C1C";
	//ctx.fillStyle="#999966";
	ctx.fillStyle="#f1e3dd";
	ctx.fill();

//SIDE right

	ctx.beginPath();
	ctx.moveTo(335,260);
	ctx.lineTo(375,310);
	ctx.lineTo(375,410);
	ctx.lineTo(300,445);
	ctx.lineTo(300,332);
	ctx.lineTo(335,260);
	ctx.closePath();
	ctx.fill();



//left

	ctx.beginPath();
	ctx.moveTo(300,445);
	ctx.lineTo(300,332);
	ctx.lineTo(205,300);
	ctx.lineTo(205,425);
	ctx.lineTo(300,445);
	ctx.closePath();
	//ctx.fillStyle="#C62828";
	//ctx.fillStyle="#c2c2a3";
	ctx.fillStyle="#FFF2dF";
	ctx.fill();
}

//DRAW ROOF
function drawRoof () {
	ctx.beginPath();
	ctx.moveTo(100,250);
	ctx.lineTo(40,325);
	ctx.lineTo(50,335);
	ctx.lineTo(105,260);
	ctx.lineTo(100,250);
	ctx.closePath();
	//ctx.fillStyle = "#3E2723";
	ctx.fillStyle = "#625750";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100,250);
	ctx.lineTo(250,200);
	ctx.lineTo(300,300);
	ctx.lineTo(150,350);
	ctx.lineTo(100,250);
	ctx.closePath();
	//ctx.fillStyle = "#212121";
	ctx.fillStyle = "#96897f";
	ctx.fill();

////////////////////////////////////

	ctx.beginPath();
	ctx.moveTo(205,332);
	ctx.lineTo(220,250);
	ctx.lineTo(340,250);
	ctx.lineTo(295,347);
	ctx.lineTo(205,337);
	ctx.closePath();
	//ctx.fillStyle="#625750";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(340,250);
	ctx.lineTo(335,260);
	ctx.lineTo(380,320);
	ctx.lineTo(385,310);
	ctx.moveTo(340,250);
	ctx.closePath();
	//ctx.fillStyle="#cc3300";
	ctx.fill();

////////////////////////////////////

	ctx.beginPath();
	ctx.moveTo(205,332);
	ctx.lineTo(220,250);
	ctx.lineTo(340,250);
	ctx.lineTo(295,347);
	ctx.lineTo(205,337);
	ctx.closePath();
	//ctx.fillStyle="#212121";
	ctx.fillStyle = "#96897f";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(340,250);
	ctx.lineTo(335,260);
	ctx.lineTo(380,320);
	ctx.lineTo(385,310);
	ctx.moveTo(340,250);
	ctx.closePath();
	ctx.fillStyle="#96897f";
	ctx.fill();
}

//DRAW CHIMNEY
function drawChimney() {
	ctx.beginPath();
	ctx.moveTo(170,260);
	ctx.lineTo(200,250);
	ctx.lineTo(200,190);
	ctx.lineTo(170,200);
	ctx.lineTo(170,260);
	ctx.closePath();
	//ctx.fillStyle = "#BF360C";
	ctx.fillStyle = "#7a7a52";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(170,200);
	ctx.lineTo(170,260);
	ctx.lineTo(150,240);
	ctx.lineTo(150,185);
	ctx.lineTo(170,200);
	ctx.closePath();
	//ctx.fillStyle = "#F4511E";
	ctx.fillStyle = "#999966";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(150,185);
	ctx.lineTo(170,200);
	ctx.lineTo(200,190);
	ctx.lineTo(180,175);
	ctx.lineTo(150,185);
	ctx.closePath();
	//ctx.fillStyle = "#990000";
	ctx.fillStyle = "#5C5C3D";
	ctx.fill();
}

//Draw Door

function drawDoor() {
	ctx.beginPath();
	ctx.moveTo(130,435);
	ctx.lineTo(80,425);
	ctx.lineTo(80,360);
	ctx.lineTo(130,370);
	ctx.lineTo(130,435);

	ctx.closePath();
	ctx.fillStyle = "#ffcc00";
	ctx.fill();
}

//Draw windows

function drawWindows() {
	ctx.beginPath();
<<<<<<< HEAD
	ctx.moveTo(240,360);
	ctx.lineTo(270,365);
	ctx.lineTo(270,405);
	ctx.lineTo(240,400);
	ctx.lineTo(240,360);


=======
	ctx.moveTo(230,360);
	ctx.lineTo(280,366);
	ctx.lineTo(280,410);
	ctx.lineTo(230,400);
	ctx.lineTo(230,359);	
>>>>>>> 32724a7877a719af323e6e679346f72183bdd436
	ctx.closePath();
	ctx.strokeStyle = "#4B3501";
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.fillStyle = "#ffcc00";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(255,363);
	ctx.lineTo(255,405);
	ctx.closePath();
	ctx.strokeStyle = "#4B3501";
	ctx.lineWidth = 3;
	ctx.stroke();	
}

function drawSun() {
	ctx.beginPath();
	ctx.arc(0,0,100,0, Math.PI*2,true);
	ctx.closePath();
	ctx.fillStyle="yellow";
	ctx.fill();
}

function drawMountain() {
	ctx.beginPath();
	ctx.moveTo(0,280);
	ctx.lineTo(300,150);
	ctx.lineTo(400,150);
	ctx.lineTo(700,280);
	ctx.closePath();
	ctx.fillStyle="#3E475B";
	ctx.fill();
	
	//SNOW
	ctx.beginPath();
	ctx.moveTo(400,150);
	ctx.lineTo(300,150);
	ctx.lineTo(200,194);
	ctx.lineTo(310,160);
	
	ctx.lineTo(300,210);
	ctx.lineTo(330,165);

	ctx.lineTo(345,220);
	ctx.lineTo(355,170);

	ctx.lineTo(385,240);
	ctx.lineTo(390,167);

	ctx.lineTo(440,210);
	ctx.lineTo(420,170);

	ctx.lineTo(480,183);
	ctx.closePath();
	ctx.fillStyle="white";
	ctx.fill();
}

function drawSteps() {
	ctx.beginPath();
	ctx.moveTo(70,440);
	ctx.lineTo(120,450);
	ctx.lineTo(105,460);
	ctx.lineTo(55,450);
	ctx.closePath();	
	ctx.fillStyle="#414242";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(40,460);
	ctx.lineTo(90,470);
	ctx.lineTo(75,480);
	ctx.lineTo(25,470);
	ctx.lineTo(40,460);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(10,480);
	ctx.lineTo(60,490);
	ctx.lineTo(45,500);
	ctx.lineTo(-5,490);
	ctx.lineTo(10,480);
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
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(175, y, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(170, y - 5, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(185, y, r + 1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //top
	ctx.arc(180, y - 5, r + 2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();


	y-=5;
	r+=2;
	if (y < 0) {
		y = 145;
		r = 8;
	}

}
/*function drawSmoke1_1() {

	ctx.beginPath(); //bottom
	ctx.arc(185, y - y1, 8 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(180, y - 20, 8 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //right
	ctx.arc(190, y - 20, 8 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	y-=10;
	if (y < 0) {
		y = 140;
	}
}
function drawSmoke1_2() {

	ctx.beginPath(); //bottom
	ctx.arc(185, 140 - y2, 8 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(180, 135 - y2, 8 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //right
	ctx.arc(190, 135 - y2, 8 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}

function drawSmoke2() {

	ctx.beginPath(); // right
	ctx.arc(205, 80, 8, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(190, 90, 9, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(185, 80, 9, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(200, 90, 9, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //top
	ctx.arc(195, 80, 10, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}
function drawSmoke2_1() {

	ctx.beginPath(); // right
	ctx.arc(205, 80 - y1, 8 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(190, 90 - y1, 9 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(185, 80 - y1, 9 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(200, 90 - y1, 9 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //top
	ctx.arc(195, 80 - y1, 10 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}

function drawSmoke2_2() {

	ctx.beginPath(); // right
	ctx.arc(205, 80 - y2, 8 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(190, 90 - y2, 9 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left
	ctx.arc(185, 80 - y2, 9 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(200, 90 - y2, 9 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //top
	ctx.arc(195, 80 - y2, 10 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}

function drawSmoke3() {

	ctx.beginPath(); //right side
	ctx.arc(230, 17, 12, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom
	ctx.arc(220, 30, 12, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left side
	ctx.arc(220, 18, 14, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(210, 25, 12, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(230, 28, 11, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}
function drawSmoke3_1() {

	ctx.beginPath(); //right side
	ctx.arc(230, 17 - y1, 12 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom
	ctx.arc(220, 30 - y1, 12 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left side
	ctx.arc(220, 18 - y1, 14 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(210, 25 - y1, 12 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(230, 28 - y1, 11 + rad1, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}
function drawSmoke3_2() {

	ctx.beginPath(); //right side
	ctx.arc(230, 17 - y2, 12 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom
	ctx.arc(220, 30 - y2, 12 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //left side
	ctx.arc(220, 18 - y2, 14 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom left
	ctx.arc(210, 25 - y2, 12 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

	ctx.beginPath(); //bottom right
	ctx.arc(230, 28 - y2, 11 + rad2, 0, 2 * Math.PI);
	ctx.fillStyle="#989898";
	ctx.fill();

}*/
/*function drawSmoke() {
	ctx.beginPath();
  ctx.moveTo(170, 80);
  ctx.bezierCurveTo(150, 70, 100, 120, 200, 110);
  ctx.bezierCurveTo(200, 130, 300, 120, 250, 110);
  ctx.bezierCurveTo(300, 120, 300, 90, 300, 90);
  ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
  ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
  //context.bezierCurveTo(420, 150, 420, 120, 390, 100);
  //context.bezierCurveTo(430, 40, 370, 30, 340, 50);
  //context.bezierCurveTo(320, 5, 250, 20, 250, 50);
  //context.bezierCurveTo(200, 5, 150, 20, 170, 80);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.fillStyle = '#989898';
  ctx.fill();
  ctx.strokeStyle = '#989898';
  ctx.stroke();
}*/
