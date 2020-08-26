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