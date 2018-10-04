class Ring {
  constructor (cx, cz, angle) {
    this.cx = cx;
    this.cz = cz;
    this.angle = angle || 0;
    this.particles = [];
    this.test = 0;
    this.init();
  }

  init () {
    for (let i =0;i<=PI;i+=PI/10) {
        this.particles.push(new Particle(this.cx,0,this.cz,8, i- this.angle*2, this.cz, this.angle, this.cx));
    }
  }

  draw () {
    this.test+=.01;
    push();
      translate(this.cx,0, this.cz)
      rotateY(-this.angle);
      for (let i of this.particles) {
        i.move();
        i.draw();
      }
    pop();
  }
}
