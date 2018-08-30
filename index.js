var particles = [];
var num = 1;


function setup () {
  createCanvas(500,500,WEBGL);
  normalMaterial();
  for (let i =0;i<num;i++) {
      particles.push(new Particle(0,0,0,5));
  }
};

function draw () {
  background(50);
  push();
    for (let i of particles) {
      i.draw();
    }
  pop();
};
