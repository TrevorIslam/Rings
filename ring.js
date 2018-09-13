class Ring {
  constructor (cx, cz, radius, angle) {
    this.cx = cx;
    this.cz = cz;
    this.radius = radius || 250;
    this.angle = angle || 0;
    this.init();
  }

  init () {
    for (let i =0;i<=1.5*PI;i+=PI/6) {
        particles.push(new Particle(this.cx,0,this.cz,5, i));
    }
  }
}
