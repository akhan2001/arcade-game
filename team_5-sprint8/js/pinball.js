function mainGame(){
  const canvas = document.getElementById('pinballGameCanvas');
  const ctx = canvas.getContext('2d');
 
  //Template for bumpers in the game.
  class Bumper {
    constructor (x,y)
    {
      this.x = x
      
      this.y = y
      this.radius = 30
      this.value = 1
      
    }

    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius,120, Math.PI *2)
      ctx.fillStyle = 'orange'
      ctx.fill();
      ctx.closePath();
    }
  }

  //Template for Pinball
  class Pinball {
    constructor (){
      this.width = 0
      this.height = 0;
      this.radius = 10;
      this.dx = 3
      this.dy = -3
    }

    draw(){
      ctx.beginPath();
      ctx.arc(this.width,this.height,this.radius,0,Math.PI*2)
      ctx.fillStyle = 'blue'
      ctx.fill();
      ctx.closePath();
      //Determines the movement of the pinball
      this.width += this.dx
      this.height += this.dy
      
      
    }
  }
  //Flipper than can be moved by user.
  class Flipper {
    constructor(){
      this.width = 150
      this.height = 10
      this.fillStyle = 'blue'
      this.move = canvas.width - this.width;
      
    }

    draw(){
      ctx.beginPath()
      ctx.fillRect(this.move,390,this.width,this.height);
      ctx.fillStyle = this.fillStyle;
      ctx.closePath();
    }
  }

  
  const flipper = new Flipper();
  const pinball = new Pinball();
  const bumper1 = new Bumper(400,100);
  const bumper2 = new Bumper(30,30);
  const bumper3 = new Bumper(50,150);

  flipper.draw();
  
  function draw()
  {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    pinball.draw();
    flipper.draw();
    bumper1.draw();
    bumper2.draw();
    bumper3.draw();
    //Hitting the top
    if(pinball.height + pinball.dy < 0){
      pinball.dy = -pinball.dy
    }

    //Hitting the bottom
    if(pinball.height + pinball.dy > canvas.height){
      
      //Hitting the flipper
      if(pinball.width > flipper.move && pinball.width < flipper.move + flipper.width)
      {
      pinball.dy = -pinball.dy;
      
      }
      //The pinball hits the ground.
      else{
        console.log("Game Over");
        
        ctx.font = '30px Arial'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', 250, 20);
        clearInterval(start);
      }
    }

    //Hitting the left
    if(pinball.width + pinball.dx < 0)
    {
      pinball.dx = -pinball.dx;
    }

    //Hitting the right
    if(pinball.width + pinball.dx > canvas.width)
    {
      pinball.dx = -pinball.dx;
    }

 
    
  }
 
  let start = setInterval(draw,30);
  
  document.addEventListener('keydown', function (e){
    if (e.key === 'ArrowRight')
    {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      flipper.move += 10;
      flipper.draw();
      console.log("Pressed right key!")
    }
  })

  document.addEventListener('keydown', function (e){
    if (e.key === 'ArrowLeft')
    {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      flipper.move -= 10;
      flipper.draw();
      console.log("Pressed left key!")
    }
  })
  console.log("Game Time!!!!!!!!!!!");
}

document.addEventListener('DOMContentLoaded', mainGame)
  
