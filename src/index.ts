import "p5";

const SPEED_SUPPRESSOR = 0.01;
const DAMPING_COEFFICIENT = -0.001;
const START_HUE = randomGlobal(0, 360);

const AMPLITUDE_X1 = randomGlobal(100, 250);
const FREQUENCY_X1 = randomGlobal(2, 7);
const PHASE_X1 = randomGlobal(0, 360);
const DAMPING_X1 = randomGlobal(10, 50) * DAMPING_COEFFICIENT;

const AMPLITUDE_X2 = randomGlobal(100, 250);
const FREQUENCY_X2 = randomGlobal(2, 7);
const PHASE_X2 = randomGlobal(0, 360);
const DAMPING_X2 = randomGlobal(10, 50) * DAMPING_COEFFICIENT;

const AMPLITUDE_Y1 = randomGlobal(100, 220);
const FREQUENCY_Y1 = randomGlobal(2, 7);
const PHASE_Y1 = randomGlobal(0, 360);
const DAMPING_Y1 = randomGlobal(10, 50) * DAMPING_COEFFICIENT;

const AMPLITUDE_Y2 = randomGlobal(100, 220);
const FREQUENCY_Y2 = randomGlobal(2, 7);
const PHASE_Y2 = randomGlobal(0, 360);
const DAMPING_Y2 = randomGlobal(10, 50) * DAMPING_COEFFICIENT;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(220);
  strokeWeight(3);
  colorMode(HSL);
  textSize(20);
}

function draw() {
  const time = frameCount * SPEED_SUPPRESSOR;

  // //Frame counter
  // strokeWeight(0);
  // rect(40, 30, 80, 25);
  // text(frameCount, 50, 50);

  strokeWeight(random(1, 10));
  const strokeColor = color(
    `hsb(${((START_HUE + random(0, 100) + frameCount) % 360).toFixed(
      0
    )}, ${random(80, 100).toFixed(0)}%, ${random(60, 100).toFixed(0)}%)`
  );
  stroke(strokeColor);

  const dampX1 = pow(Math.E, DAMPING_X1 * time);

  const x =
    AMPLITUDE_X1 * sin(FREQUENCY_X1 * time + PHASE_X1) * dampX1 +
    AMPLITUDE_X2 *
      sin(FREQUENCY_X2 * time + PHASE_X2) *
      pow(Math.E, DAMPING_X2 * time);

  const y =
    AMPLITUDE_Y1 *
      sin(FREQUENCY_Y1 * time + PHASE_Y1) *
      pow(Math.E, DAMPING_Y1 * time) +
    AMPLITUDE_Y2 *
      sin(FREQUENCY_Y2 * time + PHASE_Y2) *
      pow(Math.E, DAMPING_Y2 * time);

  point(x + width / 2, y + height / 2);

  if (dampX1 < 0.01) {
    noLoop();
  }
}

// p5.js requires `setup` and `draw` to be methods of global object
window.setup = setup;
window.draw = draw;

function randomGlobal(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
