var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");

var x = drawHouse();

//DRAW HOUSE
function drawHouse() {

	drawBackground();
	drawShadow();
	drawBase();
	drawRoof();
	drawChimney();
	drawDoor();

}
//GRASS
function drawBackground () {
/*var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");*/
//ctx.fillStyle="#76FF03";
//ctx.fillRect(0,250,500,250);
	ctx.fillStyle="#40C4FF";
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle="#76FF03";
	ctx.fillRect(0,250,500,250);
}
function drawShadow() {
	ctx.beginPath();
	ctx.moveTo(210,440);
	ctx.lineTo(400,440);
	ctx.lineTo(540,340);
	ctx.lineTo(300,340);
	ctx.closePath();
	ctx.fillStyle = "#64DD17";
	ctx.fill();
}

//DRAW BASE
function drawBase() {
/*var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");*/
	ctx.beginPath();
	ctx.moveTo(110,320);
	ctx.lineTo(155,260);
	ctx.lineTo(210,340);
	ctx.lineTo(210,440);
	ctx.lineTo(110,420);
	ctx.lineTo(110,320);
	ctx.closePath();
	ctx.fillStyle="#C62828";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(210,340);
	ctx.lineTo(330,300);
	ctx.lineTo(330,400);
	ctx.lineTo(210,440);
	ctx.lineTo(210,340);
	ctx.closePath();
	ctx.fillStyle="#B71C1C";
	ctx.fill();
}

//DRAW ROOF
function drawRoof () {
	ctx.beginPath();
	ctx.moveTo(150,250);
	ctx.lineTo(90,325);
	ctx.lineTo(100,335);
	ctx.lineTo(155,260);
	ctx.lineTo(150,250);
	ctx.closePath();
	ctx.fillStyle = "#3E2723";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(150,250);
	ctx.lineTo(300,200);
	ctx.lineTo(350,300);
	ctx.lineTo(200,350);
	ctx.lineTo(150,250);
	ctx.closePath();
	ctx.fillStyle = "#212121"
	ctx.fill();
}

//DRAW CHIMNEY
function drawChimney() {
/*var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");*/
	ctx.beginPath();
	ctx.moveTo(270,260);
	ctx.lineTo(300,250);
	ctx.lineTo(300,190);
	ctx.lineTo(270,200);
	ctx.lineTo(270,260);
	ctx.closePath();
	ctx.fillStyle = "#BF360C";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(270,200);
	ctx.lineTo(270,260);
	ctx.lineTo(250,240);
	ctx.lineTo(250,185);
	ctx.lineTo(270,200);
	ctx.closePath();
	ctx.fillStyle = "#F4511E";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(250,185);
	ctx.lineTo(270,200);
	ctx.lineTo(300,190);
	ctx.lineTo(280,175);
	ctx.lineTo(250,185);
	ctx.closePath();
	ctx.fillStyle = "#990000";
	ctx.fill();
}

//Draw Door
/*var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");*/
function drawDoor() {
	ctx.beginPath();
	ctx.moveTo(180,435);
	ctx.lineTo(130,425);
	ctx.lineTo(130,360);
	ctx.lineTo(180,370);
	ctx.lineTo(180,435);
	ctx.closePath();
	ctx.fillStyle = "#ffcc00";
	ctx.fill();
}
