let x = Math.floor(Math.random() * 20) + 1;
console.log(x, "x");
document.getElementById("guessBtn").onclick = () => {
  let y = parseInt(document.getElementById("input").value);
  if (x === y) {
    document.getElementById("result").innerHTML = "Your Guess is Correct...";
  } else if (x - y === 1 || y - x === 1) {
    document.getElementById("result").innerHTML =
      "Your Guess is So Close, Try Again";
  } else {
    document.getElementById("result").innerHTML =
      "Your Guess is Wrong, Try Again";
  }
};
