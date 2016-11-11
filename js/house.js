var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");

drawHouse();

//DRAW HOUSE
function drawHouse() {

	drawBackground();	
	drawBase();
	drawChimney();
	drawRoof();
	drawDoor();
	drawWindows();
	
}
//GRASS
function drawBackground () {
	ctx.fillStyle="#40C4FF";
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle="#76FF03";
	ctx.fillRect(0,280,500,250);
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
	ctx.fillStyle="#C62828";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(160,340);
	ctx.lineTo(280,300);
	ctx.lineTo(280,400);
	ctx.lineTo(160,440);
	ctx.lineTo(160,340);
	ctx.closePath();
	ctx.fillStyle="#B71C1C";
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
	ctx.fillStyle="#C62828";
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
	ctx.fillStyle = "#3E2723";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100,250);
	ctx.lineTo(250,200);
	ctx.lineTo(300,300);
	ctx.lineTo(150,350);
	ctx.lineTo(100,250);
	ctx.closePath();
	ctx.fillStyle = "#212121";
	ctx.fill();

////////////////////////////////////

	ctx.beginPath();
	ctx.moveTo(205,332);
	ctx.lineTo(220,250);
	ctx.lineTo(340,250);
	ctx.lineTo(295,347);
	ctx.lineTo(205,337);
	ctx.closePath();
	ctx.fillStyle="black";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(340,250);
	ctx.lineTo(335,260);
	ctx.lineTo(380,320);
	ctx.lineTo(385,310);
	ctx.moveTo(340,250);
	ctx.closePath();
	ctx.fillStyle="black";
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
	ctx.fillStyle = "#BF360C";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(170,200);
	ctx.lineTo(170,260);
	ctx.lineTo(150,240);
	ctx.lineTo(150,185);
	ctx.lineTo(170,200);
	ctx.closePath();
	ctx.fillStyle = "#F4511E";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(150,185);
	ctx.lineTo(170,200);
	ctx.lineTo(200,190);
	ctx.lineTo(180,175);
	ctx.lineTo(150,185);
	ctx.closePath();
	ctx.fillStyle = "#990000";
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
	ctx.moveTo(240,360);
	ctx.lineTo(270,365);
	ctx.lineTo(270,405);
	ctx.lineTo(240,400);
	ctx.lineTo(240,360);
	
	ctx.closePath();
	ctx.fillStyle = "#ffcc00";
	ctx.fill();
}
