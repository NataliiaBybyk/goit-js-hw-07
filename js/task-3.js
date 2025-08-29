const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputHandler(event) {
  event.preventDefault();
  const inputText = event.target.value.trim();
  nameOutput.textContent = inputText === '' ? 'Anonymous' : inputText;
}

input.addEventListener('input', inputHandler);
