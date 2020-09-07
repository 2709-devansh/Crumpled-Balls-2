class dustbin{
    constructor(){
       var options={
           isStatic: true
       }
       this.image = loadImage("dustbin.png"); 
       this.body1 = Bodies.rectangle(1150,640,200,20,options);
       this.body2 = Bodies.rectangle(1050,600,20,200,options);
       this.body3 = Bodies.rectangle(1250,600,20,200,options);
       World.add(world, this.body1);
       World.add(world, this.body2);
       World.add(world, this.body3);
    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        fill("green");
        rect(1150,640,200,20);
        rect(1050,550,20,200);
        rect(1250,550,20,200);
        image(this.image,1150,530,200,200);
    }
}