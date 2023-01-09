let p = document.querySelector("p");
let input = document.querySelector("input");

function changeP() {
  p.textContent = "Clicked";
  console.log("p clicked");
}

p.addEventListener("click", changeP);

function changeInput(event) {
  // let enteredtxt = input.value
  let enteredtxt = event.target.value;
  // let enteredtxt = event.data

  console.log(enteredtxt);
}

input.addEventListener("input", changeInput);
