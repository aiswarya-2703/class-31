class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.traj=[];
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
      var pos= this.body.position;
    var dot=[pos.x,pos.y]
    this.traj.push(dot);
    //num=0,1,2,3
    for(var num=0; num<this.traj.length; num=num+1){
   //image(img,x,y,width,ht)
   image( this.smokeImage,this.traj[num][0],this.traj[num][1])
    }
    super.display();
  }
}
