let score1 = 0
let score2 = 0

function rollDice() {
  if (score1 >= 10 || score2 >= 10) return

  const roll1 = Math.floor(Math.random() * 6) + 1
  const roll2 = Math.floor(Math.random() * 6) + 1

  document.getElementById("dice1").innerText = roll1;
  document.getElementById("dice2").innerText = roll2;

  let resultText = `Player 1 აგორა: ${roll1} | Player 2 აგორა: ${roll2} — `

  if (roll1 > roll2) {
    score1++;
    resultText += "Player 1 იღებს ქულას!"
  } else if (roll2 > roll1) {
    score2++;
    resultText += "Player 2 იღებს ქულას!"
  } else {
    resultText += "ფრეა! ქულა არ დაემატა."
  }

  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  document.getElementById("result").innerText = resultText;

  if (score1 >= 10) {
    document.getElementById("winner").innerText = "🎉 Player 1 მოიგო თამაში!"
  } else if (score2 >= 10) {
    document.getElementById("winner").innerText = "🎉 Player 2 მოიგო თამაში!"
  }
}
