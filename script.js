let cumul = 0; // Contador de intentos
const max_attempts = 2; // Máximo de intentos permitidos

const gamble = () => {
   if (cumul >= max_attempts) { 
      document.getElementById('results').innerHTML = 'You have no more attempts, please refresh the page to try again!';
      return;
   }

   let winner_num = Math.floor(Math.random() * 4) + 1; // Generar un número ganador aleatorio en cada intento
   let chosen_num = Math.floor(Math.random() * 4) + 1; // Generar el número de la caja seleccionada

   const resultsDiv = document.getElementById('results')
   
   if (chosen_num === winner_num) {
      resultsDiv.innerHTML = 'You have won, please refresh the page to play again!';
      resultsDiv.style.backgroundColor = 'gold';

   } else {
      cumul++;
      let attemptsLeft = max_attempts - cumul;
      resultsDiv.innerHTML = attemptsLeft > 0 ? `Attempts left: ${attemptsLeft}` : 'You have no more attempts';
      resultsDiv.style.backgroundColor = 'rgba(92, 130, 135, 0.553)';
   }
};


   