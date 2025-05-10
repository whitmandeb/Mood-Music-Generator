function moodSelector() {
  let input = document.getElementById("Mood-Selector").value;
  // create a new variable called iframe and select the iframe by its id
  let output = document.getElementById("Bodies");
  let output1 = document.getElementById("happy");
  if (input === "Happy") {
    output.classList.toggle("show");
    output1.classList.remove("show")
  } else if (input === "Angry") {
    output1.classList.toggle("show")
    output.classList.remove("show")
  }
}
console.log(input);
