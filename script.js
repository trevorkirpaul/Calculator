var $display = document.getElementById('inpDisplay');

var $buttons = document.getElementsByClassName('divBtn');
var $numButtons = document.getElementsByClassName('number');


var $numCur = 0;
var $numMem = 0;
var $numRes = 0;

var $operating = false;
var $operator;

var $rollingAddition = false;




//number buttons
for (var i = 0; i < $numButtons.length; i++ ) {

	$numButtons[i].addEventListener('click', function() {

		if ($numCur == 0) {

			$numCur = this.innerText;
			$display.value = this.innerText;

		} else {

			$numCur +=this.innerText;
			$display.value += this.innerText;
		}

	}); //end click event

}

//operator buttons

for (var i = 0; i < $buttons.length; i++) {

	$buttons[i].addEventListener('click', function() {

		//addition

		if (this.innerText == '+') {

			if ($operating == false){

				$numMem = Number($numCur);
				$numCur = 0;
				$operating = true;
				$operator = '+';


			} else {
				//equals op

				$numRes = Number($numCur) + $numMem;

				$numMem += Number($numCur);
				
				$display.value = $numRes


			}

		} //end addition


		//subtraction

		if (this.innerText == '-') {

			if ($operating == false){

				$numMem = Number($numCur);
				$numCur = 0;
				$operating = true;
				$operator = '-';


			} else {
				//equals op

				$numRes = $numMem - Number($numCur);

				$numMem -= Number($numCur);
				
				$display.value = $numRes


			}

		} //end subtraction

		//Sum

		if (this.innerText == '=') {

			if ($operating == true) {

				if ($operator === '-') {
					$result = $numMem - $numCur;
					$numMem -= $numCur;
				} else if ($operator === '+'){
					$result = Number($numMem) + Number($numCur);
					$numMem += $numCur;
				}

				$display.value = Number($result);
				$operating = false;

			}

		} //end subtraction













	});//end click

}