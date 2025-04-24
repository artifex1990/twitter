const circle = document.querySelector('.progress-circle-fill');
const radius = 45;
const circumference = 2 * Math.PI * radius;

function updateProgress(v, m) {
  const value = Math.min(Math.max(v, 0), m);
  const max = Math.max(m, 1);

  const progress = value / max;
  const dashoffset = circumference * (1 - progress);

  circle.style.strokeDashoffset = dashoffset;
}

circle.style.strokeDasharray = circumference;
updateProgress(0, 100);

export default updateProgress;
