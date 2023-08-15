type Point = {
  x: number;
  y: number;
};

function trackSummary(points: Point[]) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };
}

function calculateTime() {
  return 0;
}

function totalDistance(points: Point[]) {
  let result = 0;

  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  return result;
}

function distance(p1: Point, p2: Point) {
  const EARTH_RADIUS = 3959; // miles
  const dLat = radians(p2.x - p1.x);
  const dLon = radians(p2.y - p1.y);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radians(p1.x)) *
      Math.cos(radians(p2.x)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees: number) {
  return (degrees * Math.PI) / 180;
}
