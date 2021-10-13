const img = document.getElementsByTagName('img')[0];
img.style.opacity = 1.0;

const fadeAway = function () {
  img.style.opacity -= 0.01;
}

setInterval(fadeAway, 100);
