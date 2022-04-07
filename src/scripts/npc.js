class Npc{
  constructor(options){
    this.position = [600, 80]
  }
  draw(ctx){
    // debugger;
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(this.position[0], this.position[1], 10, 0, 360)
    ctx.fill();
    ctx.closePath();
  }
}
export default Npc;