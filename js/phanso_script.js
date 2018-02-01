function calculate() {
	var result;
	var ps1 = document.getElementById("i1").value;
	var ps2 = document.getElementById("i2").value;
	var operator = document.getElementById("ope").value;
	var i;
	var ps1_ts = parseInt(ps1.split("/")[0]);
	var ps1_ms = parseInt(ps1.split("/")[1]);
	var ps2_ts = parseInt(ps2.split("/")[0]);
	var ps2_ms = parseInt(ps2.split("/")[1]);
	var result_ts = 0;
	var result_ms = 0;
	if (operator === "plus") 
	{
		result_ts = (ps1_ts * ps2_ms) + (ps2_ts * ps1_ms);
		result_ms = ps1_ms * ps2_ms;
	}
	else if (operator === "minus") 
	{
		result_ts = (ps1_ts * ps2_ms) - (ps2_ts * ps1_ms);
		result_ms = ps1_ms * ps2_ms;
	}
	else if (operator === "multiply") 
	{
		result_ts = ps1_ts * ps2_ts;
		result_ms = ps1_ms * ps2_ms;
	}
	else if (operator === "divide") 
	{
		result_ts = ps1_ts * ps2_ms;
		result_ms = ps1_ms * ps2_ts;
	}

	document.getElementById("rs").innerHTML = result_ts + "/" + result_ms;
	console.log(ps1_ts + " -- " + ps1_ms + " -- " + operator + " -- " + ps2_ts + " -- " + ps2_ms );
}