import GameView from './scripts/game_view';
import Character from './scripts/main_character'
import Game from './scripts/game'
// let mainChar = 
let game = new Game();
document.addEventListener("DOMContentLoaded",function(){
  let canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.width = 1500;
  canvas.height =  800;
 
  
  //ultimately it should just be game view and game, (only maybe npc stuff & levels in addition to that)

  //i think this 'game area is near the perfect size'
  // ctx.fillRect(450, 50, 900, 800);
  // ctx.beginPath();
  // ctx.fillStyle = "purple"
  // ctx.arc(200, 200, 50, 0, 2* Math.PI)
  // ctx.strokeStyle = "orange";
  // ctx.lineWidth = 10;
  // ctx.stroke();
  // ctx.fill();
  // mover.draw(ctx);
  let gameView = new GameView(ctx, game)
  gameView.start();
});




