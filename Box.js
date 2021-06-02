class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/crosshair-aim-target-512.png");
    this.isColliding=false
  }
display(){
  this.body.position.x=mouseX
  this.body.position.y=mouseY
super.display()
}
};
