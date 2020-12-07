class box{

constructor (x,y,w,h){
    var box_options = {

        isStatic: true
      }
    this.box = Bodies.rectangle(x,y,w,h,box_options); 
    World.add(world,this.box);

    this.w = w ; this.h = h

}

    display(){

        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.w,this.h);

    }
        
}



 

