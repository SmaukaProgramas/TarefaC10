
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
 box.shapeColor = "black";
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if (keyDown("right")) 
  {
    background("red");
    box.x = box.x + 3;
  }
 

  if (keyDown("LEFT")) 
  {
    background("blue");
    box.x = box.x - 3;
  }
 
    if (keyDown("UP")) 
  {
    background("yellow");
    box.y = box.y - 3;
  }

  if (keyDown("DOWN")) 
  {
    background("green");
    box.y = box.y + 3;
  }


  
  drawSprites();
}

