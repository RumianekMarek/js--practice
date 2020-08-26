function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function randomNumber(maxNumber){
    let number = Math.floor(Math.random() * 3);
    return number + 1
}

function kpnCheck(number){
	let hand = '';
	if (number == '1'){
		hand = 'kamień';
	} else if (number == '2'){
		hand = 'papier';
	} else if (number == '3'){ 
		hand = 'nożyce'
	} else hand = 'nieznany ruch'
	return hand
}

function winCheck(player, computer){
	let message = '';
	if (player == computer){
		message = 'remis';
	} else 	if (player == 'papier'){
		if (computer == 'kamień'){
			message = 'wygrana';
		} else message = 'przegrana';
	} else 	if (player == 'kamień'){
		if (computer == 'nożyce'){
			message = 'wygrana';
		} else message = 'przegrana';
	} else 	if (player == 'nożyce'){
		if (computer == 'papier'){
			message = 'wygrana';
		} else message = 'przegrana';
	}
	return message
}