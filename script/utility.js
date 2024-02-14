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
    const letter = alphabet[Math.round(Math.random() * (alphabet.length - 1))];
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