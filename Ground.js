class Ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:true});
        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill(255,255,255);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}