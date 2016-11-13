var shapes = document.getElementById("myShapes");
var ctx = shapes.getContext("2d");

drawHouse();

//DRAW HOUSE
function drawHouse() {

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
//GRASS
function drawBackground () {
	ctx.fillStyle="#40C4FF";
	ctx.fillRect(0,0,500,280);
	ctx.fillStyle="#166602";
	ctx.fillRect(0,280,500,200);

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
	ctx.moveTo(230,360);
	ctx.lineTo(280,366);
	ctx.lineTo(280,410);
	ctx.lineTo(230,400);
	ctx.lineTo(230,359);	
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
