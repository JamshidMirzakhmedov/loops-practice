// sum numbers

const calculateSumBtnElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResult = document.getElementById("calculated-sum");

  outputResult.textContent = sumUpToNumber;
  outputResult.style.display = "block";
}

calculateSumBtnElement.addEventListener("click", calculateSum);

// Highlight links

const highlightsTxtBtnELement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorELement of anchorElements) {
    anchorELement.classList.add("highlight");
  }
}

highlightsTxtBtnELement.addEventListener("click", highlightLinks);

// Display user Data

const dummyUserData = {
  firstName: "Max",
  lastName: "John",
  age: 24,
};

const displayUserDataBtnElement = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputTxt = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputTxt;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataBtnElement.addEventListener("click", displayUserData);

// Statistcs / ROll the Dice

const rollDiceBtnElement = document.querySelector("#statistics button ");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();

    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }

    numberOfRolls++;
    const newRollListElement = document.createElement("li");
    const outputTxt = "Roll " + numberOfRolls + ": " + rolledNumber;

    newRollListElement.textContent = outputTxt;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberELement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberELement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceBtnElement.addEventListener("click", deriveNumberOfDiceRolls);
