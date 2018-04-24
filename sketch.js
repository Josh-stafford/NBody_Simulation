function setup() {
  
  let canvas = createCanvas(500, 500);
  background(30);
  frameRate(60);
  bodies = [];
  numberOfBodies = 100;
  for(var i = 0; i < numberOfBodies; i++){
    bodies.push(new Body(0.001, new Vector2((Math.random() * 500), (Math.random() * 500))));
  }

  world = new World(bodies, 0.01);
  
}

function draw() {

  world.update();
  clear()

  for(var i = 0; i < world.bodies.length; i++){

    fill(0);
    ellipse(world.bodies[i].pos.x, world.bodies[i].pos.y, 5, 5);

    // ellipse(Math.random()*500, Math.random()*500, 10, 10);

  }

}