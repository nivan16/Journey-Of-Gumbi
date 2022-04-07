import MovingObject from "./moving_object";
class Character extends MovingObject{
  constructor(options){
    super(options)
    // this.attrTest()
    this.charImage = new Image();
    this.charImageSrc = "./src/mystic_woods_free_v0.2/sprites/characters/player.png"
  }
  drawChar(ctx){
    

    // if(this.vel[0] < 1 || this.vel[1] < 1){
    this.drawIdle(ctx);
    // }
    // else{
   
    //   this.drawMoving(ctx);
    // }
    
  
    
  }
  drawIdle(ctx){
    let that = this;
    this.charImage;
    this.charImage.onload = function(){
    ctx.drawImage(that.charImage, 35,20, 50, 35, that.pos[0], that.pos[1], 80, 60); 
        // debugger;
    }
    this.charImage.src = this.charImageSrc;
    //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  //this is not working :(
  drawMoving(ctx){
    this.charImage;
    this.charImage.onload = function(){
      ctx.drawImage(that.charImage, 105,20, 100, 35, that.pos[0], that.pos[1], 80, 60) 
    }
    this.charImage.src = this.charImageSrc;  
  }
  
  attrTest(){
    console.log(this.pos);
  }
}
export default Character;