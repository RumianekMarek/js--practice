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
	} else { 
		hand = 'nożyce'
	}
	return hand
}