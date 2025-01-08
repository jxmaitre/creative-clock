let lastMinute = -1;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(30);

  // Time
  let hr = hour() % 12;
  let min = minute();
  let sec = second();
  
  // Print minute whenever it changes
  if (min !== lastMinute) {
    console.log(min);
    lastMinute = min;
  }

  // Dimensions for the clock bars
  let barHeight = height / 12;
  let activeBarColor = color(230, 146, 44); // Goldish like the sun
  let inactiveBarColor = color(242, 229, 213);

  // Draw 12 horizontal bars
  for (let i = 0; i < 12; i++) {
    if (i < hr) {
      fill(activeBarColor);
    } else {
      fill(inactiveBarColor);
    }
    rect(0, height - (i + 1) * barHeight, width, barHeight); // Fill from bottom to top
  }

  // Hour bar separating lines
  stroke(50); // Dark grey for lines
  strokeWeight(0.2); // Line thickness
  for (let i = 1; i <= 12; i++) {
    line(0, height - i * barHeight, width, height - i * barHeight);
  }
  noStroke();

  // Current active bar position
  let activeBarY = height - hr * barHeight;

  // Calculate line lengths for minutes and seconds
  let secLineLength = map(sec, 0, 59, 0, width / 2); // Seconds grow to the right
  let minLineLength = map(min, 0, 59, 0, width / 2); // Minutes grow to the left

  // Draw seconds line (rightwards growth)
  fill(150); // Lighter grey for seconds
  rect(width / 2, activeBarY, secLineLength, 4);

  // Draw minutes line (leftwards growth)
  fill(120); // Different grey for minutes
  rect(width / 2 - minLineLength, activeBarY, minLineLength, 4);
}