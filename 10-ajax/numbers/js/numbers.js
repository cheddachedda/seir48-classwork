// v2.
// when the user clicks a button
  // get a fact
  // display the fact

const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  // callback!
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // NOTHING TO DO YET

    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p') // detached DOM node
    p.innerHTML = data.text;
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send();
}

document.getElementById('fetch').addEventListener('click', fetchFact);

fetchFact(); // First fact is free
