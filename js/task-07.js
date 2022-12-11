const fontSizeControlRef = document.querySelector("#font-size-control");
const resizedTextRef = document.querySelector(".text");

resizedTextRef.style.fontSize = fontSizeControlRef.value + "px";

const resizedTextRangeRef = (event) => {
  resizedTextRef.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlRef.addEventListener("input", resizedTextRangeRef);
