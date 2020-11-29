class Stone {
    constructor(x, y, width, height){
      var options = {
        'restitution':0,
        'friction':1.0,
        'isStatic':false,
        "density":1.2
    }
      this.image = loadImage("rock.png");
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.body = Bodies.rectangle(this.x,this.y,50,50,options);
    World.add(world,this.body)
     // this.Visibility = 255;


    }
  display()
  {
   var pos =this.body.position;

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  
    push();
    translate(pos.x, pos.y);
    //rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
  }
}