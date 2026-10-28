//let guessNumber = parseInt(document.getElementById("number").value )
let displayP = document.getElementById("display")
let targetNumber = Math.round(Math.random() * 100);
console.log(targetNumber, "TARGET NUMER");
let antalGuesses = 0;

function guess() {
  antalGuesses++;
  let guessNumber = document.getElementById("number").valueAsNumber;

  if (guessNumber == targetNumber) 
    displayP.innerHTML="RÄTT!!!!!"
  else if (guessNumber > targetNumber) 
    displayP.innerHTML="för stort"
  else if (guessNumber < targetNumber) 
    displayP.innerHTML="för litet"
  console.log(antalGuesses)
}
