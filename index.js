var springs;
var t = 0;
var num = 20;
var s = 10;


function setup () {
  createCanvas(500,500,WEBGL);
    normalMaterial();
  springs = [];
  for (let i =0;i<num;i++) {
    for (let j = 0;j<num;j++) {
      let x = i*s-num*s/2+s/2;
      let y = 0;
      let z = j*s-num*s/2+s/2;
      let d = sqrt(x*x+y*y+z*z);
      let w = num*s;
      let maxd = sqrt((w*w)/2);
      let scaler = pow(d/maxd,2.5);
      let phase = PI*scaler;
      springs.push(new Spring(x,y,z,s,phase));
    }
  }
};

function draw () {
  background(50);
  push();
    translate(0,0,50);
    rotateX(-PI/6);
    rotateY(PI/6);
    for (let i of springs) {
      i.draw();
    }
  pop();
  t+=1;
};
