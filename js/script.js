const buttonRock = document.createElement("button"); 
buttonRock.innerText = 'kamień'; 
buttonRock.addEventListener('click',  function(){
    const computerMove = kpnCheck(randomNumber(3));
    const playerMove = 'kamień';
    printMessage("ruch komputera: " + computerMove + ", ruch gracza: " + playerMove + ", " + winCheck(playerMove, computerMove));
});

const buttonPaper = document.createElement("button");
buttonPaper.innerText = 'papier';       
buttonPaper.addEventListener('click',  function (){
    const computerMove = kpnCheck(randomNumber(3));
	const playerMove = 'papier';
    printMessage("ruch komputera: " + computerMove + ', ruch gracza: ' + (playerMove) + ' '+ winCheck(playerMove, computerMove));
});

const buttonScizors = document.createElement("button");    
buttonScizors.innerText = 'nożyce';   
buttonScizors.addEventListener('click',  function (){
    const computerMove = kpnCheck(randomNumber(3));
	const playerMove = 'nożyce';
    printMessage("ruch komputera: " + computerMove + ', ruch gracza: ' + (playerMove) + ' '+ winCheck(playerMove, computerMove));
});

button.append(buttonRock);
button.append(buttonPaper);
button.append(buttonScizors);


