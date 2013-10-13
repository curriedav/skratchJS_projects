var str = "Koby AKA the Beef";

function reverseStr (str) { 
	var rStr = "";

	for (var i = str.length - 1; i >= 0; i--) {
		rStr += str[i];
	};
	return rStr;
};

console.log(reverseStr(str));