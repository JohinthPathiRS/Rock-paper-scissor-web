function playGame(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result = compareChoices(playerChoice, computerChoice);
  
    displayResult(playerChoice, computerChoice, result);
  }
  
  function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function displayResult(playerChoice, computerChoice, result) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML =
      'You chose ' + playerChoice + ', computer chose ' + computerChoice + '. ' + result;
  }
  