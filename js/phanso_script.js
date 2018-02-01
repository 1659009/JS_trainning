function calculate() {
	var result;
	var ps1 = Number(document.getElementById("i1"));
	var ps2 = Number(document.getElementById("i2"));
	var operator = document.getElementById("ope");
	if (operator === "plus") 
	{
		result = ps1 + ps2;
	}
	else if (operator === "minus") 
	{
		result = ps1 - ps2;
	}
	else if (operator === "multiply") 
	{
		result = ps1 * ps2;
	}
	else if (operator === "divide") 
	{
		result = ps1 / ps2;
	}
	document.getElementById("rs").innerHTML = result;
}