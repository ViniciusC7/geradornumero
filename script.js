const generateRandomsBtn = document.querySelector('#generate-randoms-btn');
const numOfRandomsInput = document.querySelector('#num-of-randoms');
const maxRangeInput = document.querySelector('#max-range');
const randomsOutput = document.querySelector('#randoms');

generateRandomsBtn.addEventListener('click', generateRandoms);

function generateRandoms() {
  const numOfRandoms = numOfRandomsInput.value;
  const maxRange = maxRangeInput.value;
  let randoms = [];

  for (let i = 0; i < numOfRandoms; i++) {
    randoms.push(Math.floor(Math.random() * maxRange) + 1);
  }

  randomsOutput.textContent = `Os números gerados são: ${randoms.join(', ')}`;
}
