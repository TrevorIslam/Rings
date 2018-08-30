class Spring {
  constructor (x,y,z,size,phase) {
    this.x = x;
    this.y = y;
    this.z = z
    this.size = size;
    this.h = 100;
    this.phase = phase;
  }

  draw () {
    push();
      this.h = 50 + (100* abs(sin(t/40+this.phase)));
      translate(this.x,this.y,this.z);
      box(this.size,this.h,this.size);
    pop();
  }
}
