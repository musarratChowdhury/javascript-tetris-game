function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

//calculating the distance between two points
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
//collision ditection
function didCollide(obj1, obj2) {
  const dist = Math.hypot(obj2.x - obj1.x, obj2.y - obj1.y);
  if (dist - obj2.radius - obj1.radius < 1) {
    return true;
  } else {
    return false;
  }
}
//calculate angular distance between 2 points
//it should be  destination - source,so x1,y1 should be source, x2, y2 should be destination
function calculateAngle(x1, y1, x2, y2) {
  return (angle = Math.atan2(y2 - y1, x2 - x1));
}
module.exports = {
  randomIntFromRange,
  randomColor,
  distance,
  calculateAngle,
  didCollide,
};
