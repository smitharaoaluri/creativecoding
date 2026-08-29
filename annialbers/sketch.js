// Referencing Daniel Shiffman's video on Additional Waves
// https://www.youtube.com/watch?v=okfZRl4Xw-c&t=11s

// Inspired by Anni Albers' work
// https://www.theguardian.com/artanddesign/2019/jan/18/anni-albers-intersecting

let waves1 = [];
let waves2 = [];
let waves3 = [];
let waves4 = [];

let colorArray = ["#f9ece3", "#14599E", "#eb5f2a", "#395785"];
let c1, c2, c3, c4;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);

  // --------------------------------
  // BACKGROUND
  // --------------------------------

  background("#eb5f2a");

  // Draw the orange stitched checker pattern
  DrawChecker();

  // Draw the blue stitch patches
  let h1 = random(100);
  let h2 = random(100);

  DrawPatch(h1, 30);
  DrawPatch(h2, 10);
  DrawPatch(h2 + 20, 5);

  // Draw vertical bands
  for (let a = 0; a < width; a += 50) {
    if ((a / 50) % 2 == 0) {
      fill("#103D69");
    } else {
      fill("#f9ece3");
    }

    DrawBand(a);
  }

  // --------------------------------
  // CREATE WAVES
  // --------------------------------

  for (let i = 0; i < 10; i++) {
    waves1.push(
      new Wave(random(50), random(50, 100), random(TWO_PI))
    );

    waves2.push(
      new Wave(random(30), random(800), random(TWO_PI))
    );

    waves3.push(
      new Wave(random(30), random(800), random(TWO_PI))
    );

    waves4.push(
      new Wave(random(80), random(10, 300), random(TWO_PI))
    );
  }

  // --------------------------------
  // WAVE COLORS
  // --------------------------------

  c1 = random(colorArray);
  c2 = random(colorArray);
  c3 = random(colorArray);
  c4 = random(colorArray);
}


// --------------------------------
// DRAW WAVES
// --------------------------------

function draw() {

  for (let x = 0; x < width; x += 3) {

    let y1 = 0;
    let y2 = 0;
    let y3 = 0;
    let y4 = 0;

    // Add all waves together
    for (let wave of waves1) {
      y1 += wave.measure(x);
    }

    for (let wave of waves2) {
      y2 += wave.measure(x);
    }

    for (let wave of waves3) {
      y3 += wave.measure(x);
    }

    for (let wave of waves4) {
      y4 += wave.measure(x);
    }

    // --------------------------------
    // WAVE 1
    // --------------------------------

    strokeWeight(3);
    stroke(c1);

    line(
      x,
      y1 + height / 4,
      x,
      y1 + height / 4 + 5
    );

    // --------------------------------
    // WAVE 2
    // --------------------------------

    stroke(c2);

    line(
      x,
      y2 + height / 2,
      x,
      y2 + height / 2 + 5
    );

    // --------------------------------
    // WAVE 3
    // --------------------------------

    stroke(c3);

    line(
      x,
      y3 + (3 * height) / 4,
      x,
      y3 + (3 * height) / 4 + 5
    );

    // --------------------------------
    // WAVE 4
    // --------------------------------

    stroke(c4);

    line(
      x,
      y4 + 15 + (3 * height) / 4,
      x,
      y4 + 15 + (3 * height) / 4 + 5
    );
  }
}


// --------------------------------
// WAVE CLASS
// --------------------------------

class Wave {

  constructor(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;
  }

  measure(x) {
    return (
      sin(
        this.phase +
        (TWO_PI * x) / this.period
      ) * this.amplitude
    );
  }
}


// --------------------------------
// ORANGE CHECKER / STITCH PATTERN
// --------------------------------

function DrawChecker() {

  // Instead of looping over every pixel,
  // work directly with the visible stitch grid.

  for (let x = 0; x < width; x += 5) {

    for (let y = 0; y < height; y += 5) {

      if (
        ((x / 5) % 2 == 0 && (y / 5) % 2 == 1) ||
        ((x / 5) % 2 == 1 && (y / 5) % 2 == 0)
      ) {
        fill("#c43615");
      } else {
        fill("#eb5f2a");
      }

      noStroke();

      rect(
        x + random(-1, 1),
        y + random(-1, 1),
        2,
        5
      );
    }
  }
}


// --------------------------------
// VERTICAL BLUE / WHITE BANDS
// --------------------------------

function DrawBand(x) {

  for (let i = 0; i < 6; i++) {

    for (let y = 0; y < height; y += 5) {

      if (
        (i % 2 == 0 && (y / 5) % 2 == 1) ||
        (i % 2 == 1 && (y / 5) % 2 == 0)
      ) {

        noStroke();

        rect(
          x + i * 5 + random(-1, 1),
          y + random(-1, 1),
          2,
          5
        );
      }
    }
  }
}


// --------------------------------
// BLUE STITCH PATCHES
// --------------------------------

function DrawPatch(h, x) {

  for (let i = 0; i < width; i += 5) {

    for (let j = h; j < h + x; j++) {

      if (
        ((i / 5) % 2 == 0 && j % 2 == 1) ||
        ((i / 5) % 2 == 1 && j % 2 == 0)
      ) {
        fill("#1c66b1");
      } else {
        fill("#14599E");
      }

      noStroke();

      rect(
        i + random(-1, 1),
        j * 5 + random(-1, 1),
        2,
        5
      );
    }
  }
}