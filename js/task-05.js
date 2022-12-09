const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const typeInName = (event) => {
  if (event.currentTarget.value !== "") {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
};

textInput.addEventListener("input", typeInName);
