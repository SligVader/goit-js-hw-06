const inputRef = document.querySelector("#validation-input");
const inputLength = Number(inputRef.getAttribute("data-length"));

const onInputFocus = (event) => {
  if (event.currentTarget.value.length === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onInputFocus);
