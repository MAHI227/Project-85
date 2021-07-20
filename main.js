canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_X = 5;
greencar_Y = 255;

function add() {
background_imageTag = new Image();
background_imageTag.onload = uploadBackground;
background_imageTag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
}

function uploadBackground() {
	ctx.drawing(background_imageTag, 0 ,0 canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawing(greencar_imageTag, 0 ,0 greencar_image.width, greencar_image._height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_Y >=0){
		greencar_Y=greencar_Y-10;
        console.log("when up arrow is pressed x="+ greencar_X+"y="+greencar_Y);
        upload_background();
        upload_rover();
    }
}

function down()
{
	if(greencar_Y <=500){
        greencar_Y=greencar_Y+10;
        console.log("when up arrow is pressed x="+ greencar_X+"y="+greencar_Y);
 upload_background();
        upload_rover();
    }
}

function left()
{
	if(greencar_X <=700){
		greencar_X=greencarr_X+10;
        console.log("when up arrow is pressed x="+ greencar_X+"y="+greencar_Y);
        upload_background();
        upload_rover();
     }	
}

function right()
{
	if(greencar_X >=0){
		greencar_X=greencar_X-10;
        console.log("when up arrow is pressed x="+ greencar_X+"y="+greencar_Y);
        upload_background();
        upload_rover();
    }	
}
