var particles = [];
var rings = [];
var num = 10;


function setup () {
  createCanvas(500,500,WEBGL);
  normalMaterial();
  for (let i =0;i<num;i++) {
      particles.push(new Particle(0,0,0,5, i/2));
  }
  rings.push(new Ring(particles));
};

function draw () {
  background(50);
  push();
    rotateY(PI/4);
    for (let i of particles) {
      i.move();
      i.draw();
    }
  pop();
};
