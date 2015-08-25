$(document).ready(function(){


var input;

var num1;
var num2;
var result;

var string = "2";
var string2 = "6";


// Add a click handler to all the buttons
//Assign inner text of number buttons to inner text of screen
$("span").click(function(e){

	// is there a way to do this line in jquery?
	//var text = this.innerText;
    
    //input.push(this.innerText);  --> why won't this work

    var text = this.innerText;

    $("#screen").append(text);


    if(text == 'C')
    {
    	$("#screen").text("");
    }
    else if(text == "=")
    {
    	$("#screen").text(calculate());
    }

});



//Execute when an = sign is hit on the calc
function calculate(input)
{
	var operator;

	input = $("#screen").text();

	if(input.indexOf("+") !== -1)
	{
		input = input.split("+");
		console.log("There is a + sign");

		num1 = parseInt(input[0]);
		num2 = parseInt(input[1]);

		result = num1 + num2;

		return result;
	}
	else if(input.indexOf("-") !== -1)
	{
		input = input.split("-");

		num1 = parseInt(input[0]);
		num2 = parseInt(input[1]);

		result = num1 - num2;

		return result;
	}	
	else if(input.indexOf("x") !== -1)
	{
		input = input.split("x");

		num1 = parseInt(input[0]);
		num2 = parseInt(input[1]);

		result = num1 * num2;

		return result;
	}
	else if(input.indexOf("x") !== -1)
	{
		input = input.split("x");

		num1 = parseInt(input[0]);
		num2 = parseInt(input[1]);

		result = num1 * num2;

		return result;
	}
	else(input.indexOf("&#247;") !== -1)
	{
		input = input.split("&#247;");

		num1 = parseInt(input[0]);
		num2 = parseInt(input[1]);

		result = num1 / num2;

		return result;
	}








}









}); // End onload 