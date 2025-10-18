let flowers = [];

function setup(){
  createCanvas(400,400);
  flowerPower();
}

function draw(){
  background("lightblue");

  updateAndDrawFlowers();

  if(frameCount % 15 === 0){
    flowers.push(createFlower());
  }
}
 
function updateAndDrawFlowers(){
  for (let i = flowers.length -1; i>= 0; i--){
    let flower = flowers[i];

    updateFlower(flower);

    drawFlower(flower);

    flower.size *= 0.99;
    flower.lifespan -= 1;
    
    if(flower.lifespan <= 0){
      flowers.splice(i, 1);
    }
  }
}

function flowerPower(){
  for(let i = 0; i < 20; i+=1){
    // Create a flower in a random location.
    let flower1 = createFlower();
    
    // Add the flower to the flowers array.
    flowers.push(flower1);
  }
}

function createFlower(){
  let flower = {
    x: random(width),
    y: random(height),
    size: random(30, 80),
    lifespan: random(200, 300),
    color: color(random(255), random(255), random(255)),
    rotation: random(TWO_PI),
    speed: random(0.04, 0.08),
    scaleFactor: random(0.8, 1.2),

  };
  return flower;
}

function updateFlower(f) {
  f.lifespan -= 0;
  f.rotation += f.speed;
}

function drawFlower(f) {
  push(); // 保存当前坐标系
  translate(f.x, f.y);         // 平移到花的位置
  rotate(f.rotation);          // 旋转
  scale(f.scaleFactor);        // 缩放

  noStroke();
  fill(red(f.color), green(f.color), blue(f.color), f.lifespan); // 使用寿命控制透明度

  // 花瓣
  ellipse(0, 0, f.size / 2, f.size);
  ellipse(0, 0, f.size, f.size / 2);

  // 花心
  fill(255, 204, 0, f.lifespan);
  circle(0, 0, f.size / 3);

  pop(); // 恢复坐标系
}

function flowerPower() {
  for (let i = 0; i < 20; i++) {
    flowers.push(createFlower());
  }
}


