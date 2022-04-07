import MovingObject from "./moving_object";

class Enemy extends MovingObject{
  constructor(position){
    super({pos: position, color: 'red', radius: 10, vel: [0,0]})
    this.enemyImg = new Image();
    this.enemyImgSrc = "./src/mystic_woods_free_v0.2/sprites/characters/slime.png";
  }

  drawEnemy(ctx){
    let that = this;
    this.enemyImg;
    this.enemyImg.onload = function(){
      ctx.drawImage(that.enemyImg, 1,1, 35, 35, that.pos[0], that.pos[1], 80, 60)
      
      // debugger;
    }
    this.enemyImg.src = this.enemyImgSrc;
  }


}
export default Enemy;