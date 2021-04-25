class Drop{
    constructor(x,y,width,height,angle) {
        var options= {
        density: 1,
        friction: 0.1
        }
        this.body = Bodies.ellipse; 
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.rain = Bodies.circle(x,y,5,options)
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
  }

  update() {
      if(this.body.rain.position.y> height){
         Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)})
      }
  }

  
}
