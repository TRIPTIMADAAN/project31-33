class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            density:3
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ecllipseMode(RADIUS)
        ecllipse(pos.x,pos.y,10)
        }
}