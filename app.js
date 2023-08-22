let textInput = document.querySelector("input");
textInput.maxLength = 60;

let charCount = document.querySelector("p");

function updateValue() {
  let inputText = textInput.value;
  let count = inputText.length;
  charCount.innerHTML = `${count}/ 60`;
}

textInput.addEventListener("input", updateValue);
