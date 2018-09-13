class Particle {
  constructor (x,y,z,size, theta) {
    this.cx = x;
    this.cz = z;
    this.x = x;
    this.y = 0;
    this.z = 0;
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
    this.z = this.r*cos(this.theta) + this.cz;
    this.theta+=0.02;
  }
}
