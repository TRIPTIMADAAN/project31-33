class Partical{
    constructor(x,y,r){
        var options={
            isStatic:true,
            friction:0.7,
            density:5
        }
        this.body=Bodies.circle(x,y,r,options)
        this.color=this.color(random(0,255),random(0,255),random(0,255))
        this.radius=r
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill(this.color)
        ecllipseMode(RADIUS)
        ecllipse(pos.x,pos.y,this.r,this.r)
    
    }
}