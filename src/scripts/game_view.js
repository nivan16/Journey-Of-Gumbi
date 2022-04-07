class GameView{
  constructor(ctx, game){
    this.ctx = ctx;
    this.game = game;
    this.view = this.view.bind(this);
  }

  start(){
    let that = this;
    // i think the issue was that i was rebinding the keys in the animation frame request????
    this.game.bindPlayerControls(this.ctx)
    requestAnimationFrame(this.view.bind(this));
    
    
 
          
  }
  
  view(){
   
    this.game.draw(this.ctx);
      // console.log(this.game.player.vel)
    requestAnimationFrame(this.view);
  }
  // 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
  //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
}
export default GameView;
