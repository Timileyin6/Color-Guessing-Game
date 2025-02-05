	let score = 0;
    	let targetColor = "";

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