class Obstacle{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,height,width,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()

}
}