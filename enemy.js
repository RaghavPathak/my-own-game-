class Enemy{
    constructor(x,y,width,height){
        var options={
            isStatic :true,
            density : 1.0

        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image = loadImage("sprites/man.png");
        this.isColliding=false
        World.add(world,this.body)
       
    }

display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()

}
}