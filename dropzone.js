class Dropzone{
        constructor(x,y,width,height){
            var options = {
                isStatic: true
            }
            
              this.Body= Bodies.rectangle(x,y,width,height,options);
              World.add(world,this.Body);
              this.width = width
              this.height = height
                
        }
    
        display(){
            var pos = this.Body.position;
            rectMode(CENTER);
            noStroke();
            fill (255)
            rect(pos.x, pos.y, this.width, this.height);
        }
}
    