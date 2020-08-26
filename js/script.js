var computerMove, playerMove;

computerMove = kpnCheck(randomNumber(3));
playerMove = kpnCheck(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));



printMessage('ruch komputera: ' + (computerMove));
printMessage('ruch gracza: ' + (playerMove));
