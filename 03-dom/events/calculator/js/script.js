const buttons = {
  square: document.getElementById('square-button'),
  half: document.getElementById('half-button'),
  percent: document.getElementById('percent-button'),
  area: document.getElementById('area-button')
}

const solution = document.getElementById('solution');

const calculateSquare = function () {
  const input = document.getElementById('square-input').value;
  solution.innerHTML = input * input;
}

const calculateHalf = function () {
  const input = document.getElementById('half-input').value;
  solution.innerHTML = input / 2;
}

const calculatePercentage = function () {
  const input1 = document.getElementById('percent1-input').value;
  const input2 = document.getElementById('percent2-input').value;
  solution.innerHTML = `${Math.round(input1 / input2 * 100)}%`;
}

const calculateArea = function () {
  const input = document.getElementById('area-input').value;
  solution.innerHTML = Math.PI * (input * input);
}


document.getElementById('square-input').addEventListener('onchange', calculateSquare);
buttons.square.addEventListener('click', calculateSquare);
buttons.half.addEventListener('click', calculateHalf);
buttons.percent.addEventListener('click', calculatePercentage);
buttons.area.addEventListener('click', calculateArea);
