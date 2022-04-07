import Enemy from "./enemy";
import Character from "./main_character";
import Npc from "./npc";
import Magic from './magic';
import {Util} from './util';

class Game {
  constructor(options){
    this.bindPlayerControls = this.bindPlayerControls.bind(this);
    this.player = new Character({ pos: [window.innerWidth / 2.1, window.innerHeight / 2.2], vel: [0, 0], radius: 10, color: 'white' });
    this.npc = new Npc();
    this.dimX = 1400;
    this.dimY = 720;
    this.enemies = [];
    this.addEnemies();
    this.bullets = [];
    this.background = new Image();
    this.backgroundSrc = './src/Pipoya RPG Tileset 32x32/SampleMap/samplemap.png';
  }

  addEnemies(){
    for (let i = 0; i < 5; i++) {
      //this ungodly code is to specify the bounds of the enemies when they spawn! (at random positions)
      let enemy = new Enemy([Math.floor(Math.random() * (1400 - 300) + 300), Math.floor(Math.random() * (400 - 30) + 30)])
      this.enemies.push(enemy)
    }
  }
  

  //this will be tile sets later on!
  renderLevel(ctx){
    let that = this;
    this.background;
    this.background.onload = function() {
      ctx.drawImage(that.background,0,0,2000,2000,300,30,1400,720)
    }
    this.background.src = this.backgroundSrc;
    // ctx.strokeStyle = "black";
    // // ctx.fillStyle = 'transparent';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    // ctx.stroke();
  }
  draw(ctx){
    //this will be responsible drawing the hostile npcs! and maybe main character too!
    // ctx.clearRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    // this.npc.draw(ctx);
    this.renderLevel(ctx);        
    this.bullets.forEach((bullet) => {
      bullet.drawMagic(ctx);
      bullet.move();


    });                                              
    
    
    this.player.vel[0] /= 1.075;
    this.player.vel[1] /= 1.075;
    
    this.player.drawChar(ctx);
    
    
    this.enemies.forEach((enemy)=>{
      // i made a mistake here by only doing positive velocities :c
      enemy.vel = [Util.randomVel(), Util.randomVel()]
      enemy.move();
      enemy.drawEnemy(ctx);
    });


    
    // debugger;
    this.removeOutOfBoundsBullet();
    this.resetBounds();
    

  }

  allPeople(){
    let total = [this.player];
    return total.concat(this.enemies);
  }

  

  resetBounds(){
    let total = this.allPeople();
    
    for(let i = 0; i < total.length; i++){
      const spot = total[i].pos;
      if(spot[0] < 300){
        total[i].pos[0] = 300; 
      }
      if(spot[0] > 1440){
        total[i].pos[0] = 1440;
      }
      if(spot[1] < 30){
        total[i].pos[1] = 30;
      }
      if(spot[1] > 670){
        total[i].pos[1] = 670;
      }
    }
  }

  //fire ball code
  removeOutOfBoundsBullet() {
    let that = this;
    this.bullets.forEach((bullet, index)=>{
      if (bullet.pos[0] < 300 || bullet.pos[0] > 1440) {
        that.bullets.splice(index, index+1);
      }
      if (bullet.pos[1] < 30 || bullet.pos[1] > 670) {
        that.bullets.splice(index, index + 1);
      }
    });

  }






















  bindPlayerControls(ctx){
    let that = this;
    document.addEventListener('keydown', function (e) {
      
      switch (e.code){
        case 'KeyW': {
          const up = [0, -1];
          that.player.vel[0] += up[0]
          that.player.vel[1] += up[1]
          that.player.move();
        }
        break;
        case 'KeyS': {
          const down = [0, 1];
          that.player.vel[0] += down[0]
          that.player.vel[1] += down[1]
          that.player.move();
        }
        break;
        case 'KeyA': {
          const left = [-1, 0];
          that.player.vel[0] += left[0]
          that.player.vel[1] += left[1]
          that.player.move();
        }
        break;
        case 'KeyD': {
          const right = [1, 0];
          that.player.vel[0] += right[0]
          that.player.vel[1] += right[1]
          that.player.move();
        }
        break;
        case 'Space': {
          let pos = that.player.pos;
          let vel = [2,2];
          let fire = new Magic({pos: pos, vel: vel});
          
          that.bullets.push(fire);
       
          
        }
        break;
      }

    });
  }






}
export default Game;