class Particle {
  constructor (x,y,z,size, theta) {
    this.cx = x;
    this.cz = z;
    this.x = x;
    this.y = 0;
    this.z = 0;
    this.size = size;
    this.r = 150;
    this.theta = theta;
  }

  draw () {
    push();
      fill(255, 255, 255, 255);
      translate(this.x,this.y,this.z);
      sphere(this.size);
    pop();
  }

  move () {
    this.y = this.r*sin(this.theta);
    this.x = this.r*cos(this.theta);
    this.theta+=0.02;
  }
}
