const affirmatives = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"
];

const neutrals = [
  "Reply hazy, try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again"
];

const negatives = [
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

function ask() {
  const question = document.getElementById('question').value.trim();
  const answerDiv = document.getElementById('answer');
  if (!question) {
    answerDiv.innerText = "Ask a real question!";
    answerDiv.style.opacity = 1;
    return;
  }

  const roll = Math.floor(Math.random() * 4) + 1;
  let response;

  if (roll === 1 || roll === 2) {
    response = affirmatives[Math.floor(Math.random() * affirmatives.length)];
  } else if (roll === 3) {
    response = neutrals[Math.floor(Math.random() * neutrals.length)];
  } else {
    response = negatives[Math.floor(Math.random() * negatives.length)];
  }

  // Shake animation
  const ball = document.getElementById('eightball');
  ball.style.transform = "rotate(5deg)";
  setTimeout(() => ball.style.transform = "rotate(-5deg)", 100);
  setTimeout(() => ball.style.transform = "rotate(0deg)", 200);

  // Fade in answer
  answerDiv.style.opacity = 0;
  setTimeout(() => {
    answerDiv.innerText = response;
    answerDiv.style.opacity = 1;
  }, 400);
}
