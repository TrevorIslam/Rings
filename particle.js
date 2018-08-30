class Particle {
  constructor (x,y,z,size) {
    this.x = x;
    this.y = y;
    this.z = z
    this.size = size;
  }

  draw () {
    push();
      fill(255);
      translate(this.x,this.y,this.z);
      sphere(this.size);
    pop();
  }

  move () {
    
  }
}
