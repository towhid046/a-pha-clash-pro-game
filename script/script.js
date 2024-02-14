function hide(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}
function show(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function getARandomAlphabet() {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letter = alphabet[Math.round(Math.random() * alphabet.length)];
  return letter;
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function setInnerText(elementId, text) {
  let element = document.getElementById(elementId);
  element.innerText = text;
}

function getInnerText(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getFocus(elementId) {
  document.getElementById(elementId).focus();
}

function play() {
  hide("home");
  show("play-ground");
  continueGame();
  getFocus("keys-container");
}

function gameEnd() {
  hide("play-ground");
  show("score");
  // update the final score:
  setInnerText("final-score", getInnerText("score-state"));
}

function playAgain() {
  hide("score");
  show("play-ground");
}

// Continue game function:
function continueGame() {
  // display a random alphabet for the first time
  const alphabet = getARandomAlphabet();
  setInnerText("display-key", alphabet.toUpperCase());

  // set the background of the key
  setBackgroundColor(alphabet);
}

// keyboard event listener:
document.addEventListener("keyup", keyupEventHandelar);

// keyup event handelar:
let pressedKeyCount = 0;
function keyupEventHandelar(event) {
  // grab the current state of life
  let lifeCount = parseInt(getInnerText("life-state"));

  // grab the pressed key
  let pressedKey = event.key;
  const currentDisplayKey = getInnerText("display-key");
  if (currentDisplayKey.toLowerCase() === pressedKey.toLowerCase()) {
    removeBackgroundColor(pressedKey);

    const alphabet = getARandomAlphabet();
    setInnerText("display-key", alphabet.toUpperCase());

    setBackgroundColor(alphabet.toLowerCase());

    // update the score state:
    let scoreCount = parseInt(getInnerText("score-state"));

    setInnerText("score-state", (scoreCount += 1));
  }

  // update the life state:
  if (
    pressedKey.toLowerCase() !== currentDisplayKey.toLowerCase() &&
    pressedKey !== "Escape" &&
    lifeCount !== 0
  ) {
    setInnerText("life-state", lifeCount - 1);
    // setTimeout(function () {
    //   alert(`You have lost 1 life left!!`);
    // }, 200);
  }

  // increase the pressed key:
  if ((event.target.tagName = "BODY")) {
    pressedKeyCount++;
  }

  // if user press Esc key or press the keybord any key 26 times the game will be over:
  if (pressedKey === "Escape" || pressedKeyCount === 26 || lifeCount === 0) {
    gameEnd();
  }
}
