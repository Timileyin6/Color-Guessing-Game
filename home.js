document.getElementById('reset').addEventListener("click", function(){
	document.getElementById("overlay").classList.add("show-overlay");
	document.getElementById("resetDrop").classList.add("bounce");
	document.getElementById("returnBut").classList.add("buttons");
	document.getElementById("mistakeBut").classList.add("buttons");
	document.getElementById('dropDown').innerHTML = "ARE YOU SURE YOU WANT TO RESET ?";
	document.getElementById('returnBut').innerHTML = "YES";
	document.getElementById('mistakeBut').innerHTML = "NO";

});

	function restartGame() {
    document.getElementById("resetDrop").classList.remove("bounce");
    document.getElementById("overlay").classList.remove("show-overlay");
    document.getElementById("returnBut").classList.remove("buttons");
	document.getElementById("mistakeBut").classList.remove("buttons");
	document.getElementById('dropDown').innerHTML = "  ";
	document.getElementById('returnBut').innerHTML = "  ";
	document.getElementById('mistakeBut').innerHTML = " ";
}

document.getElementById('rules').addEventListener("click", function(){
	document.getElementById("overlay").classList.add("show-overlay");
	document.getElementById("rulesDrop").classList.add("bounce");
	document.getElementById("rulesButt").classList.add("buttons");
	document.getElementById('rulesButt').innerHTML = "RETURN";
	document.getElementById('rulesP').innerHTML = "🎨 Color Game Rules 🎨 <br> Objective:Match the correct colors based on the game’s challenge before you run out of turns or time!🔹 How to Play: 1.Start the Game: Click the Start button to begin.  2. Game Challenge: You will see a color displayed .  3️. Choose Wisely:It’s a matching game, pick the correct color from the options and it’s a speed test, quickly select the color before time runs out.  4️. Scoring: Earn points for every correct answer.  5️. Game Over: The game ends when you run out of turns or time.";
});

	function homeReturn() {
    document.getElementById("rulesDrop").classList.remove("bounce");
    document.getElementById("overlay").classList.remove("show-overlay");
    document.getElementById("rulesButt").classList.remove("buttons");
	document.getElementById('rulesP').innerHTML = " ";
	document.getElementById('rulesButt').innerHTML = " ";
}