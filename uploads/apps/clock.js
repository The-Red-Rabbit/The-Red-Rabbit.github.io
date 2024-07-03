let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(720, 800);
  stroke(255);

  let radius = min(width/2, height/2) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height *0.75;
}

function draw() {
  background(230);

  let mY = constrain(mouseY, 0, 255);
  if (mouseIsPressed) {
    rect(cx, mY, 100, 100);
  } else {
    rect(cx, 150, 100, 100);
  }

  // Draw the clock background
  rectMode(CENTER);
  fill(210);
  noStroke();
  rect(cx, cy, clockDiameter + 150, clockDiameter + 50);
  fill(244, 122, 158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  let labels = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  fill('white');
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    
    if (a%30 == 0) {
        if (a%90 == 0) {
            textSize(32);
        } else {
            textSize(18);
        }
        text(labels[a/30], x, y);
    } else {
        vertex(x, y);
    }





    
  }
  endShape();

  

  text('🌈', 0, 100);
}
