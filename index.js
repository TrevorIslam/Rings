var particles = [];
var rings = [];
var num = 10;


function setup () {
  createCanvas(500,500,WEBGL);
  normalMaterial();
    for (let theta = 0; theta <=2*PI; theta+=PI/6) {
      let x = 250 * cos(theta);
      let z = 250 * sin(theta);
      rings.push(new Ring(x,z));
    }
};

function draw () {
  orbitControl();
  background(50);
  push();
    rotateY(PI/4);
    for (let i of particles) {
      i.move();
      i.draw();
    }
  pop();
};
