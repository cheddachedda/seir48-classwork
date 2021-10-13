const makeMadLib = function () {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();
  alert(`${person} really likes ${adjective} ${noun}s`)
}

$('#lib-button').on('click', makeMadLib);

const intros = [
  "Sorry I can't come",
  "Please forgive my absence",
  "This is going to sound crazy but",
  "Get this:",
  "I can't go because",
  "I know you're going to hate me but",
  "I was minding my own business and boom",
  "I feel terrible but",
  "I regretfully cannot attend",
  "This is going to sound like an excuse but",
];

const scapegoats = [
  "my nephew",
  "the ghost of Hitler",
  "the Pope",
  "my ex",
  "a high school marching band",
  "Dan Rather",
  "a sad clown",
  "the kid from Air Bud",
  "a professional cricket team",
  "my Tinder date",
];

const delays = [
  "just shit the bed",
  "died in front of me",
  "won't stop telling me knock-knock jokes",
  "is having a nervous breakdown",
  "gave me syphilis",
  "poured lemonade in my gas tank",
  "stabbed me",
  "found my box of human teeth",
  "stole my bicycle",
  "posted my nudes on Instagram",
];

$('#excuse-generator').on('click', function() {
  const intro = intros[Math.floor(Math.random() * intros.length)];
  const scapegoat = scapegoats[Math.floor(Math.random() * scapegoats.length)];
  const delay = delays[Math.floor(Math.random() * delays.length)];
  const excuse = `${intro} ${scapegoat} ${delay}.`;
  $('#excuse').text(excuse);
})
