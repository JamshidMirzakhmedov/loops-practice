const productName = document.querySelector("#product-name");
const submit = document.querySelector("button");
const remainingCharsElement = document.querySelector("#remaining-chars");

const maxAllowedChars = productName.maxLength;

function updateRemainingChars(event) {
  const enteredtxtLength = event.target.value.length;
  const remainingChars = maxAllowedChars - enteredtxtLength;
  remainingCharsElement.textContent = remainingChars;
  if (remainingChars < 10) {
    productName.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  } else {
    productName.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }
}

productName.addEventListener("input", updateRemainingChars);
