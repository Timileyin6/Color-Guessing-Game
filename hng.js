	
const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get("level") || 1; // Default to level 1 if not provided
console.log(level);

 function resetGame(){
         score = 0;
         document.getElementById("score").innerHTML = "Score : " + score;
         document.getElementById("answer").innerHTML = "";
         startNewGame();
      }

function newLevel(level) {
    if (level == 1) {
    levelEasy();
    }
    else if(level == 2){
      levelMedium();
     }
     else if(level == 3){
      levelHard();
     }
     else if(level == 4){
      levelNochance();
     }
}

 function resetHearts() {
    const gameArea = document.getElementById("hearts");
    gameArea.innerHTML = ""; // Clear existing hearts

    // Recreate and add hearts/icons
    for (let i = 0; i < 3; i++) {
        let heart = document.createElement("i");
        heart.classList.add("heart", "fa-solid", "fa-heart");
        gameArea.appendChild(heart);
    }
}

function levelEasy(){
   let score = 0;
   let targetColor = "";
   let timeleft = 5;
   let countdownTimer;
   const insideTimer = document.getElementById("timer");


      function randomColor() {
         const number = "0123456789ABCDEF";
         let color = "#";

         for(let i = 0; i < 3; i++){
            color += number[Math.floor(Math.random() * 16)];
         }
         return color;
      }

      function startNewGame(){
         targetColor = randomColor();
         document.querySelector(".targetColor").style.backgroundColor = targetColor;

         let options = [targetColor];
         while (options.length < 3) {
            let newColor = randomColor();
            if(!options.includes(newColor)){
               options.push(newColor);
            }
            timeleft = 5;
            insideTimer.innerHTML = "00 : 0" + timeleft;
           clearInterval(countdownTimer);
           countdownTimer = setInterval(timerDisplay, 1000);

         }

         options.sort(() => Math.random() - 0.5); 

         const optionsContainer = document.getElementById("option-container");
          optionsContainer.innerHTML = "";

          options.forEach(color => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.dataset.testid = "colorOption";
            button.onclick= () => {
               handleGuess(color);
            };

            optionsContainer.appendChild(button);

          });
      }

      function handleGuess(color) {
         if(color === targetColor){
            score++;
            document.getElementById("answer").innerHTML = "You are correct !"; 
            document.getElementById("answer").classList.add("bounce");
            setTimeout(() => {document.getElementById("answer").classList.remove("bounce");}, 500);
         }
         else{
            document.getElementById("answer").innerHTML = "You are wrong. Try again.";
            document.getElementById("answer").classList.add("shake");
            setTimeout(() => { document.getElementById("answer").classList.remove("shake"); }, 500);
            removeLife();
         }
          document.getElementById("score").innerHTML = "Score : " + score;
          startNewGame();
      }
      
      function resetGame(){
         score = 0;
         document.getElementById("score").innerHTML = "Score : " + score;
         document.getElementById("answer").innerHTML = "";
         startNewGame();
      }

      startNewGame();

      function timerDisplay(){
      
      timeleft--;
      insideTimer.innerHTML = "00 : 0" +timeleft;

      if(timeleft == 0){
         document.getElementById("answer").innerHTML = "Time up! Try again";
         document.getElementById("answer").style.color = "beige";
         removeLife();
         clearInterval(countdownTimer);  //This is to restart the counter
         startNewGame();    // Says after timeleft reaches zero the function is called and the next game pops up
      }
  }

  function removeLife(){
   const icons = document.querySelectorAll("#hearts .heart");
   if(icons.length > 0){
      icons[icons.length - 1].remove();
   }

   if(icons.length === 1){
      document.getElementById("overlay").classList.add("showOverlay");
      document.getElementById("gameOver").classList.add("overDropdown");
      document.getElementById("gameOverText").innerHTML = "GAME OVER! TRY AGAIN. <br> Your score is " + score;
      document.getElementById("gameOverButt").classList.add("button");
      document.getElementById("gameOverButt").innerHTML = "NEW GAME";
         //GAME OVER SPACE
   }
  }

   document.getElementById("gameOverButt").addEventListener("click", function (){
   resetGame();
   document.getElementById("overlay").classList.remove("showOverlay");
   document.getElementById("gameOver").classList.remove("overDropdown");
   document.getElementById("gameOverText").innerHTML = " ";
   document.getElementById("gameOverButt").classList.remove("button");
   document.getElementById("gameOverButt").innerHTML = " ";
   resetHearts();
});
}
function levelMedium(){
   let score = 0;
   let targetColor = "";
   let timeleft = 9;
   let countdownTimer;
   const insideTimer = document.getElementById("timer");

      function randomColor() {
         const number = "0123456789ABCDEF";
         let color = "#";

         for(let i = 0; i < 6; i++){
            color += number[Math.floor(Math.random() * 16)];
         }
         return color;
      }

      function startNewGame(){
         targetColor = randomColor();
         document.querySelector(".targetColor").style.backgroundColor = targetColor;

         let options = [targetColor];
         while (options.length < 6) {
            let newColor = randomColor();
            if(!options.includes(newColor)){
               options.push(newColor);
            }
            timeleft = 9;
            insideTimer.innerHTML = "00 : 0" + timeleft;
           clearInterval(countdownTimer);
           countdownTimer = setInterval(timerDisplay, 1000);

         }

         options.sort(() => Math.random() - 0.5); 

         const optionsContainer = document.getElementById("option-container");
          optionsContainer.innerHTML = "";

          options.forEach(color => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.dataset.testid = "colorOption";
            button.onclick= () => {
               handleGuess(color);
            };

            optionsContainer.appendChild(button);

          });
      }

      function handleGuess(color) {
         if(color === targetColor){
            score++;
            document.getElementById("answer").innerHTML = "You are correct !"; 
            document.getElementById("answer").classList.add("bounce");
            setTimeout(() => {document.getElementById("answer").classList.remove("bounce");}, 500);
         }
         else{
            document.getElementById("answer").innerHTML = "You are wrong. Try again.";
            document.getElementById("answer").classList.add("shake");
            setTimeout(() => { document.getElementById("answer").classList.remove("shake"); }, 500);
            removeLife();
         }
          
          let highScore = localStorage.getItem("highscore") || 0;
          if(score > highScore){
            localStorage.setItem("highscore", score);
          }
          document.getElementById("score").innerHTML = "Score : " + score;
          startNewGame();
      }

      function resetGame(){
         score = 0;
         document.getElementById("score").innerHTML = "Score : " + score;
         document.getElementById("answer").innerHTML = "";
         startNewGame();
      }

      startNewGame();

      function timerDisplay(){
      
      timeleft--;
      insideTimer.innerHTML = "00 : 0" +timeleft;

      if(timeleft == 0){
         document.getElementById("answer").innerHTML = "Time up! Try again";
         removeLife();
         clearInterval(countdownTimer);  //This is to restart the counter
         startNewGame();    // Says after timeleft reaches zero the function is called and the next game pops up
      }
  }

  function removeLife(){
   const icons = document.querySelectorAll("#hearts .heart");
   if(icons.length > 0){
      icons[icons.length - 1].remove();
   }

   if(icons.length === 1){
      document.getElementById("overlay").classList.add("showOverlay");
      document.getElementById("gameOver").classList.add("overDropdown");
      document.getElementById("gameOverText").innerHTML = "GAME OVER! TRY AGAIN. <br> Your score is " + score;
      document.getElementById("gameOverButt").classList.add("button");
      document.getElementById("gameOverButt").innerHTML = "NEW GAME";
         //GAME OVER SPACE   
  }
}
 document.getElementById("gameOverButt").addEventListener("click", function (){
   resetGame();
   document.getElementById("overlay").classList.remove("showOverlay");
   document.getElementById("gameOver").classList.remove("overDropdown");
   document.getElementById("gameOverText").innerHTML = " ";
   document.getElementById("gameOverButt").classList.remove("button");
   document.getElementById("gameOverButt").innerHTML = " ";
   resetHearts();
});  
}
function levelHard(){
   let score = 0;
   let targetColor = "";
   let timeleft = 5;
   let countdownTimer;
   const insideTimer = document.getElementById("timer");

      function randomColor() {
         const number = "0123456789ABCDEF";
         let color = "#";

         for(let i = 0; i < 6; i++){
            color += number[Math.floor(Math.random() * 16)];
         }
         return color;
      }

      function startNewGame(){
         targetColor = randomColor();
         document.querySelector(".targetColor").style.backgroundColor = targetColor;

         let options = [targetColor];
         while (options.length < 6) {
            let newColor = randomColor();
            if(!options.includes(newColor)){
               options.push(newColor);
            }
            timeleft = 5;
            insideTimer.innerHTML = "00 : 0" + timeleft;
           clearInterval(countdownTimer);
           countdownTimer = setInterval(timerDisplay, 1000);

         }

         options.sort(() => Math.random() - 0.5); 

         const optionsContainer = document.getElementById("option-container");
          optionsContainer.innerHTML = "";

          options.forEach(color => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.dataset.testid = "colorOption";
            button.onclick= () => {
               handleGuess(color);
            };

            optionsContainer.appendChild(button);

          });
      }

      function handleGuess(color) {
         if(color === targetColor){
            score++;
            document.getElementById("answer").innerHTML = "You are correct !"; 
            document.getElementById("answer").classList.add("bounce");
            setTimeout(() => {document.getElementById("answer").classList.remove("bounce");}, 500);
         }
         else{
            document.getElementById("answer").innerHTML = "You are wrong. Try again.";
            document.getElementById("answer").classList.add("shake");
            setTimeout(() => { document.getElementById("answer").classList.remove("shake"); }, 500);
            removeLife();
         }
          
          let highScore = localStorage.getItem("highscore") || 0;
          if(score > highScore){
            localStorage.setItem("highscore", score);
          }
          document.getElementById("score").innerHTML = "Score : " + score;
          startNewGame();
      }

      function resetGame(){
         score = 0;
         document.getElementById("score").innerHTML = "Score : " + score;
         document.getElementById("answer").innerHTML = "";
         startNewGame();
      }

      startNewGame();

      function timerDisplay(){
      
      timeleft--;
      insideTimer.innerHTML = "00 : 0" +timeleft;

      if(timeleft == 0){
         document.getElementById("answer").innerHTML = "Time up! Try again";
         removeLife();
         clearInterval(countdownTimer);  //This is to restart the counter
         startNewGame();    // Says after timeleft reaches zero the function is called and the next game pops up
      }
  }

  function removeLife(){
   const icons = document.querySelectorAll("#hearts .heart");
   if(icons.length > 0){
      icons[icons.length - 1].remove();
   }

   if(icons.length === 1){
      document.getElementById("overlay").classList.add("showOverlay");
      document.getElementById("gameOver").classList.add("overDropdown");
      document.getElementById("gameOverText").innerHTML = "GAME OVER! TRY AGAIN. <br> Your score is " + score;
      document.getElementById("gameOverButt").classList.add("button");
      document.getElementById("gameOverButt").innerHTML = "NEW GAME";
   }
  }
   document.getElementById("gameOverButt").addEventListener("click", function (){
   resetGame();
   document.getElementById("overlay").classList.remove("showOverlay");
   document.getElementById("gameOver").classList.remove("overDropdown");
   document.getElementById("gameOverText").innerHTML = " ";
   document.getElementById("gameOverButt").classList.remove("button");
   document.getElementById("gameOverButt").innerHTML = " ";
   resetHearts();
});
}
function levelNochance(){
   let score = 0;
   let targetColor = "";
   let timeleft = 3;
   let countdownTimer;
   const insideTimer = document.getElementById("timer");

      function randomColor() {
         const number = "0123456789ABCDEF";
         let color = "#";

         for(let i = 0; i < 6; i++){
            color += number[Math.floor(Math.random() * 16)];
         }
         return color;
      }

      function startNewGame(){
         targetColor = randomColor();
         document.querySelector(".targetColor").style.backgroundColor = targetColor;

         let options = [targetColor];
         while (options.length < 6) {
            let newColor = randomColor();
            if(!options.includes(newColor)){
               options.push(newColor);
            }
            timeleft = 3;
            insideTimer.innerHTML = "00 : 0" + timeleft;
           clearInterval(countdownTimer);
           countdownTimer = setInterval(timerDisplay, 1000);

         }

         options.sort(() => Math.random() - 0.5); 

         const optionsContainer = document.getElementById("option-container");
          optionsContainer.innerHTML = "";

          options.forEach(color => {
            const button = document.createElement("button");
            button.style.backgroundColor = color;
            button.dataset.testid = "colorOption";
            button.onclick= () => {
               handleGuess(color);
            };

            optionsContainer.appendChild(button);

          });
      }

      function handleGuess(color) {
         if(color === targetColor){
            score++;
            document.getElementById("answer").innerHTML = "You are correct !"; 
            document.getElementById("answer").classList.add("bounce");
            setTimeout(() => {document.getElementById("answer").classList.remove("bounce");}, 500);
         }
         else{
            document.getElementById("answer").innerHTML = "You are wrong. Try again.";
            document.getElementById("answer").classList.add("shake");
            setTimeout(() => { document.getElementById("answer").classList.remove("shake"); }, 500);
            removeLife();
         }
          
          let highScore = localStorage.getItem("highscore") || 0;
          if(score > highScore){
            localStorage.setItem("highscore", score);
          }
          document.getElementById("score").innerHTML = "Score : " + score;
          startNewGame();
      }

      function resetGame(){
         score = 0;
         document.getElementById("score").innerHTML = "Score : " + score;
         document.getElementById("answer").innerHTML = "";
         startNewGame();
      }

      startNewGame();


      function timerDisplay(){
      
      timeleft--;
      insideTimer.innerHTML = "00 : 0" +timeleft;

      if(timeleft == 0){
         document.getElementById("answer").innerHTML = "Time up! Try again";
         removeLife();
         clearInterval(countdownTimer);  //This is to restart the counter
         startNewGame();    // Says after timeleft reaches zero the function is called and the next game pops up
      }
  }

  function removeLife(){
   const icons = document.querySelectorAll("#hearts .heart");
   if(icons.length > 0){
      icons[icons.length - 1].remove();
   }

   if(icons.length === 1){
      document.getElementById("overlay").classList.add("showOverlay");
      document.getElementById("gameOver").classList.add("overDropdown");
      document.getElementById("gameOverText").innerHTML = "GAME OVER! TRY AGAIN. <br> Your score is " + score;
      document.getElementById("gameOverButt").classList.add("button");
      document.getElementById("gameOverButt").innerHTML = "NEW GAME";
      //GAME OVER SPACE
   }
  }
   document.getElementById("gameOverButt").addEventListener("click", function (){
   resetGame();
   document.getElementById("overlay").classList.remove("showOverlay");
   document.getElementById("gameOver").classList.remove("overDropdown");
   document.getElementById("gameOverText").innerHTML = " ";
   document.getElementById("gameOverButt").classList.remove("button");
   document.getElementById("gameOverButt").innerHTML = " ";
   resetHearts();
});
}
console.log("Loading Level:", level);
newLevel(level); // Call your level-loading function
