function play() {
  hide("home");
  show("play-ground");
  getFocus("keys-container");
  continueGame();
  setInnerText("score-state", 0);
  setInnerText("life-state", 5);
};

// to press enter to play now;
getFocus('play-now-btn')

document.getElementById("play-now-btn").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    play();
  }
});

function gameEnd(key) {
  hide("play-ground");
  show("score");
  // update the final score:
  setInnerText("final-score", getInnerText("score-state"));

  // remove the pressed key background color:
  removeBackgroundColor(key.toLowerCase())
};

function playAgain() {
  play();
};

// Continue game function:
function continueGame() {
  // display a random alphabet for the first time
  const alphabet = getARandomAlphabet();
  setInnerText("display-key", alphabet.toUpperCase());

  // set the background of the key
  setBackgroundColor(alphabet);

  // keyboard event listener:
  document.addEventListener("keyup", keyupEventHandelar);
};

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
    lifeCount !== 0 &&
    pressedKey !== "Enter"
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
  if (pressedKey === "Escape" || pressedKeyCount === 50 || lifeCount === 0) {
    gameEnd(currentDisplayKey);
  }
};
