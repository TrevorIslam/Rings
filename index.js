var particles = [];
var rings = [];
var num = 10;

var rotateAngle = 0;

function setup () {
  createCanvas(500,500,WEBGL);
  normalMaterial();
    for (let theta = 0; theta <=2*PI; theta+=PI/16) {
      let x = 300 * cos(theta);
      let z = 300 * sin(theta);
      rings.push(new Ring(x,z, theta));
    }

    camera(0, -300, (height/2.0) / tan(PI*30.0 / 180.0) - 200, 0, 0, 0, 0, 1, 0);
};

function draw () {
  orbitControl();
  background(0);
  fill(255,0,0);

  push();
    translate(0,600,-500);
    rotateX(rotateAngle);
    for (let i of rings) {
      i.draw();
    }
  pop();
};

function keyPressed() {
  if (keyCode == "A".charCodeAt(0)) {
    rotateAngle+=PI/6;
  }
}

function keyPressed() {
  if (keyCode == "S".charCodeAt(0)) {
    rotateAngle-=PI/6;
  }
}
