class Ring {
  constructor (cx, cz, radius, angle) {
    this.cx = cx;
    this.cz = cz;
    this.radius = radius;
    this.angle = angle || 0;
    this.particles = [];
    this.test = 0;
    this.init();
  }

  init () {
    for (let i =0;i<=PI;i+=PI/10) {
        this.particles.push(new Particle(this.cx,0,this.cz,8, i- this.angle*2));
        console.log(this.particles.length);
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
