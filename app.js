let textInput = document.querySelector("input");
textInput.maxLength = 60;

let charCount = document.querySelector("p");

let remainingChar = 60;

function updateValue() {
  let inputText = textInput.value;
  let count = inputText.length;
  let remainingChar = 60 - count;
  charCount.innerHTML = `${remainingChar}/60`;
}

textInput.addEventListener("input", updateValue);
