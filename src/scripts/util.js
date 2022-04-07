const Util = {
  // scale
  randomVel(){
    //this vel is better(truly random), but doesnt really offer a nice movement pattern to play against
    //one of the issues here is that it gives a value for both the x & y values, making it move exclusively diagonally
      //not sure if i should keep it like this, also should consider a way to keep the same velocity for maybe like 5 seconds.
    let vel = (Math.random() ) * (Math.round(Math.random()) ? 1 : -1) //the Math.round gives 0 or 1, zero being a falsey value, and will give negative or positive num at random
  
    return vel
  }
}
//module for the increment of vectors and stuff
export {Util};