function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backGroundColorChangeRef = document.querySelector(".change-color");
const inputRef = document.querySelector(".color");

const colorChangeRef = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  inputRef.textContent = randomColor;
};

backGroundColorChangeRef.addEventListener("click", colorChangeRef);
