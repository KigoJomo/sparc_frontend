// script.js
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const passInput2 = document.getElementById("pass2")
const regInput = document.getElementById("reg")

function checkInputState(element) {
  const elementId = element.id;
  const elementLabel = document.querySelector(`label[for="${elementId}"]`); // Use backticks for string interpolation
  if (element.value.trim() !== "") {
    elementLabel.style.fontSize = ".75rem";
    elementLabel.style.top = "-5px";
  } else {
    elementLabel.style.fontSize = "1rem";
    elementLabel.style.top = "50%";
    elementLabel.style.transform = "translateY(-50%)";
  }
}

emailInput.addEventListener("blur", () => checkInputState(emailInput));
passInput.addEventListener("blur", () => checkInputState(passInput));
passInput2.addEventListener("blur", () => checkInputState(passInput2))
regInput.addEventListener("blur", () => checkInputState(regInput))

const visibilityTrigger = document.querySelector(".visibilityTrigger");
var visible = false
visibilityTrigger.addEventListener("click", () => {
    if (!visible) {
        passInput.type = "text"
        visible = true
    } else {
        passInput.type = "password"
        visible = false
    }
})
