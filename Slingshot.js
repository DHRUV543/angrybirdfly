class Slingshot
{
    constructor(bodyA,pointB)
    {
        // extra option for Constraint in JSON format
        var option={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.04
    }
    this.pointB=pointB;
    // creating Constraint 
     this.chain= Constraint.create(option); 
    // add constraint into world 
    World.add(world,this.chain);
    
    }
    fly(){
       this.chain.bodyA=null ;  
    }
    display()
    {
        if(this.chain.bodyA){
        // accessing position of bodyA that is bird .body
        var pointA=this.chain.bodyA.position 
        // accessing pointB position which is not a body
        var  pointB=this.pointB;
       // var pointB=this.chain.bodyB.position
    // to draw a line between bird and contrained log

    strokeWeight(4);
    stroke("red")
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }


}