import "./progress-ring.js";

const progress = document.querySelector("#progress");
const valueInput = document.querySelector("#value");
const animateInput = document.querySelector("#animate");
const hideInput = document.querySelector("#hide");

valueInput.addEventListener("input", () => {
  if (valueInput.value !== "") progress.value = valueInput.value;
});

function normalizeInput() {
  progress.value = valueInput.value;
  valueInput.value = String(progress.value);
}

valueInput.addEventListener("change", normalizeInput);
valueInput.addEventListener("blur", normalizeInput);

animateInput.addEventListener("change", () => {
  progress.animated = animateInput.checked;
});

hideInput.addEventListener("change", () => {
  progress.hidden = hideInput.checked;
});
