// setTimeout expects a callback – it does not use Prmises
// task: wrap setTimeout in a Promise (so it works with .then)

const holdUp = (duration) => {
  return new Promise((resolve) => {
    console.log('resolving');
    setTimeout(resolve, duration);
  });
};

const

holdUp(3000).then(() => {
  console.log('3 seconds has passed');
});
