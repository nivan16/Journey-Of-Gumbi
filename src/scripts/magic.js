import MovingObject from './moving_object';
class Magic extends MovingObject{
  constructor(options){
    //better way to do this than just storing the options hash
    // this.options = options;
    // this.initialVelocityDir(options.vel);
    super(options);
    
    
    
    this.fireImage = new Image();
    this.fireImageSrc = './src/fireball_V_1_1/FB500-1.png';
  }
  initialVelocityDir(vel){
    
    if (vel[0] < 0) {
      this.vel[0] = -5;
    }
    else{
      this.vel[0] = 5;
    }
    if (vel[1] < 0) {
      this.vel[1] = -5;
    }
    else{
      this.vel[1] = 5;
    }
    
  }
  drawMagic(ctx){
    let that = this;
    this.fireImage;
    this.fireImage.onload = function () {
      ctx.drawImage(that.fireImage, 100, 100, 250, 250, that.pos[0], that.pos[1], 25, 25);
 
    };
    this.fireImage.src = this.fireImageSrc;
    
  }
  moveMagic(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  

}
export default Magic;