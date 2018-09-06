class Particle {
  constructor (x,y,z,size, theta) {
    this.x = x;
    this.y = y;
    this.z = z
    this.size = size;
    this.r = 100;
    this.theta = theta;
  }

  draw () {
    push();
      fill(255);
      translate(this.x,this.y,this.z);
      sphere(this.size);
    pop();
  }

  move () {
    this.y = this.r*sin(this.theta);
    this.z = this.r*cos(this.theta);
    this.theta+=0.05;
  }
}
