class Launcher{
    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 20,
        
        }
        this.pointB = pointB
        this.launcher = Matter.Constraint.create(options);
        World.add(world, this.launcher)
    }


    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;
    
    }


    display(){
        if(this.launcher.bodyA){
            var pA = this.launcher.bodyA.position
            var pB = this.pointB
            strokeWeight(4);
            stroke("black");
            
            line(pA.x,pA.y,pB.x,pB.y)
        }
    }
}