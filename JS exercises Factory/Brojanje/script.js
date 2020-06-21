var numbers = [];

function generateNumbersArray() {
	for(let i = 0; i < 100; i++){
		numbers[i] = i +1;
	}
}

generateNumbersArray();

var currentPlayerNumber = 1;
var numbersLength = numbers.length;
var countUp = true;

function goToNextPlayer() {
	if(countUp){
		if(currentPlayerNumber == 10){
			currentPlayerNumber = 1
		} else {
			currentPlayerNumber++;
		}
	} else {
		if(currentPlayerNumber == 1){
			currentPlayerNumber = 10;
		} else {
			currentPlayerNumber--;
		}
	}

}

function count(){
	var index = 0;
	while(index < numbersLength){
		let number = numbers[index];
		
		console.log("Player " + currentPlayerNumber + ", number " + number);
		
		if(index == 99){
			console.log("The final player is " + currentPlayerNumber);
			break;
		}
		
		index++;
		
		if(number % 7 == 0 && number % 13 == 0){
			countUp = !countUp;
			goToNextPlayer();
			goToNextPlayer();
		}
		else if(number % 7 == 0){
			countUp = !countUp;
			goToNextPlayer();
			
		} else if (number % 13 == 0){
			goToNextPlayer();
			goToNextPlayer();
			
		} else {
			goToNextPlayer();
		}
	}
}

count();