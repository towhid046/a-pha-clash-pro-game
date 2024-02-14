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
  
  function playAgain(){
      hide('score')
      show('play-ground');
  }

// Continue game function:
function continueGame() {
  // display a random alphabet for the first time
  const alphabet = getARandomAlphabet();
  setInnerText("display-key", alphabet.toUpperCase());

  // set or remove the background of the key
  setBackgroundColor(alphabet);

  // // get the pressed key
  // let exeCounter = 0;
  // document
  //   .getElementById("keys-container")
  //   .addEventListener("click", function (event) {
  //     let key = event.target;
  //     if (key.tagName === "KBD") {
  //       exeCounter += 1 ;
  //       let scoreCount = parseInt(getInnerText("score-state"));
  //       // get the current value and display if the value is match:
  //       let currentKey = getInnerText("display-key");

  //       if (key.innerText.toLowerCase() === currentKey.toLowerCase()) {
  //         removeBackgroundColor(currentKey.toLowerCase());

  //         const alphabetOne = getARandomAlphabet();
  //         setInnerText("display-key", alphabetOne.toUpperCase());

  //         setBackgroundColor(alphabetOne.toLowerCase());

  //         setInnerText("score-state", (scoreCount += 1));
  //       } else {
  //         const lifeCount = parseInt(getInnerText("life-state"));
  //         setInnerText("life-state", lifeCount - 1);
  //         setTimeout(function () {
  //           alert(`You have lost 1 life left!!`);
  //         }, 200);
  //       }
  //     }

  //     if(exeCounter >= 26){
  //       hide('play-ground');
  //       show('score');
  //       exeCounter = 0;
  //       setInnerText('final-score', parseInt(getInnerText('score-state')))
  //       setInnerText('score-state', 0)
  //       setInnerText('life-state', 5)
  //     }

  //   });
  
}

// keydown event:
document.addEventListener('keyup', function(event){
  // console.log(e.key)
  let pressedKey = event.key;
  const currentDisplayKey = getInnerText('display-key');
  if(currentDisplayKey.toLowerCase() === pressedKey.toLowerCase()){
    const alphabet = getARandomAlphabet();
    setInnerText('display-key', alphabet.toUpperCase());
  }
})