for ( var bottleNumber = 99; bottleNumber >= 1; bottleNumber -- ) {
	
	var bottlesPhrase = bottleNumber + " bottles of beer on the wall, " + bottleNumber + 
	" bottles of beer. Take one down pass it around " + (bottleNumber - 1) + " bottles of beer on the wall!";

	var bottlesPhrase2 = bottleNumber + " bottles of beer on the wall, " + bottleNumber + 
	" bottles of beer. Take one down pass it around " + (bottleNumber - 1) + " bottle of beer on the wall!";

	var bottlesPhrase1 = bottleNumber + " bottle of beer on the wall, " + bottleNumber + 
	" bottles of beer. Take one down pass it around zero bottles of beer on the wall!!!!!";

	switch (bottleNumber) {
		case bottleNumber === 2:
			console.log(bottlesPhrase2);
			break;
		case bottleNumber === 1:
			console.log(bottlesPhrase1);
			break;
		default:
			console.log(bottlesPhrase);
			break;
	};

};