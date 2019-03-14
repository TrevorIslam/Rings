class Particle {
  constructor (x,y,z,size, theta, globalZ, ringAngle, ringRadius) {
    this.cx = x;
    this.cz = z;
    this.x = x;
    this.y = 0;
    this.z = 0;
    this.size = size;
    this.r = 150;
    this.theta = theta;
    this.globalZ = globalZ;
    this.ringAngle = ringAngle;
    this.ringRadius = ringRadius;
    this.t=0;
  }

  draw () {

    let offset = this.globalZ + (this.r * sin(this.theta)*sin(this.ringAngle));
    push();
      let alpha = ((offset + this.r + 300)/900)*255;
      colorMode(HSB, 100);
      fill( ((this.ringAngle + this.t*5) % (2*PI)) / (2*PI)*100,100,100,alpha);
      colorMode(RGB, 255);

      translate(this.x,this.y,this.z);
      sphere(abs(9*cos(this.theta/2))+4);
    pop();
    this.t+=0.01;
  }

  move () {
    this.y = this.r*sin(this.theta);
    this.x = this.r*cos(this.theta);
    this.theta+=0.02;
  }
}
