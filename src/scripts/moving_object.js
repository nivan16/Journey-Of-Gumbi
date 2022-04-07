class MovingObject{
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel;
    //these two will be different since I will use my own sprite(s?)!
    this.color = options.color;
    this.radius = options.radius;
  }

  draw(ctx){
    // debugger
      

    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // debugger;
  }
  // drawStandingChar(ctx, img, source){
  //   //this will be the real draw image with all of the entities!
  //   //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  //   img.onload = function(){
  //     ctx.drawImage(img, 47, 55, 17, 23, this.pos[0], this.pos[1], 17, 23)
  //   }
  //   img.src = source

  // }
  //need to figure out proper velocity
  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

}
export default MovingObject;
