class Paperclass{

    constructor(x, y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y,radius,options);
        this.radius=radius;
         
        World.add(world,this.body);
    }
    display(){
        //paper using ellipse instruction
       //ellipse(this.body.position.x,this.body.y,this.radius);
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

}