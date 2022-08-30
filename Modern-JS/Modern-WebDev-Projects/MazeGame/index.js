const { World, Engine, Runner, Render, Body, Bodies, Events } = Matter;

// Change maze size
const cells = 5;

const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 10, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 10, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 10, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 10, height, { isStatic: true }),
];

World.add(world, walls);

// Maze Generation

const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const demolishWall = (row, column) => {
  // If we've visted the cell at [row][column], return
  if (grid[row][column]) {
    return;
  }

  // Mark this cell as 'visited'
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  // For each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // See if the next neighbor is out of bounds
    if (nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells) {
      continue;
    }

    // If we've visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // Demolish a wall from verticals or horizontals
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // Visit that next cell
    demolishWall(nextRow, nextColumn);
  }
};

demolishWall(startRow, startColumn);

// Draw Horizontal walls
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(columnIndex * unitLength + unitLength / 2, rowIndex * unitLength + unitLength, unitLength, 5, {
      isStatic: true,
    });
    World.add(world, wall);
  });
});

// Draw Vertical walls
verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(columnIndex * unitLength + unitLength, rowIndex * unitLength + unitLength / 2, 5, unitLength, {
      isStatic: true,
    });
    World.add(world, wall);
  });
});

// Goal

const goal = Bodies.rectangle(width - unitLength / 2, height - unitLength / 2, unitLength / 2, unitLength / 2, {
  label: "goal",
  isStatic: true,
});
World.add(world, goal);

// Player Ball

const ball = Bodies.circle(unitLength / 2, unitLength / 2, unitLength / 4, { label: "ball" });
World.add(world, ball);

// Player Controls

document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  if (event.code === "KeyW") {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.code === "KeyA") {
    Body.setVelocity(ball, { x: x - 5, y });
  }
  if (event.code === "KeyS") {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.code === "KeyD") {
    Body.setVelocity(ball, { x: x + 5, y });
  }
});

// Win Condition

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
      console.log("GOOOAAAAAL!!!");
    }
  });
});
