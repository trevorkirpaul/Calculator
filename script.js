var $numberOne = 0;
var $numberTwo = 0;
var $result = 0;

var $operating = false;
var $operator;
var $preventMultiTap = false;
var $summed = false;

var $display = document.getElementById('inpDisplay');
var $spanOp = document.getElementById('spanOp');

var $numButtons = document.getElementsByClassName('number');
var $fxnButtons = document.getElementsByClassName('divBtn');



//find all num buttons

for (var i = 0; i < $numButtons.length; i++) {

	$numButtons[i].addEventListener('click', function() {

		if ($operating == false && $summed == false) {

			if ($display.value == 0) {
				$display.value = this.innerText;
				$numberOne = this.innerText;

			} else {

				$display.value += this.innerText;
				$numberOne += this.innerText;

			}
		} else if ($operating == true) {

			$preventMultiTap = false;

			if (isNaN($display.value) == true) {

				$display.value = this.innerText;
				$numberTwo = this.innerText;

			} else if ($result == 'resulted') {

				$result = 0;
				$display.value = this.innerText;
				$numberTwo = this.innerText;

			}	else if ($summed == true) {

				alert('etst');

			} else {
				$display.value += this.innerText;
				$numberTwo += this.innerText;
			}
		}; //end if operating is false/true


	}); //end click event
} //end find num buttons

//find all fxn buttons

for (var i = 0; i < $fxnButtons.length; i++) {

	$fxnButtons[i].addEventListener('click', function() {

		if (this.innerText == 'CE' || this.innerText == 'C') {

			$numberOne = 0;
			$numberTwo = 0;
			$result = 0;
			$display.value = 0;
			$operating = false;
			$result = '';
			$preventMultiTap = false;
			$spanOp.innerText = '';
			$operator = '';
			$summed = false;

		} else if (this.innerText == '+' || this.innerText == '-' || this.innerText == '*' || this.innerText == '/' ) {

			if ($display.value != 0) {
				
				if ($operating == false && $summed == false) {

					$operating = true;
					$operator = this.innerText;
					$display.value = this.innerText;

				} else if ($operating == true && $preventMultiTap == false && $summed == false) {

					$spanOp.innerText = $numberOne + ' ' + $operator + ' ' + $numberTwo + ' ='; 
					$result = eval($numberOne + $operator + $numberTwo);
					$operator = this.innerText;
					$display.value = $result
					$numberOne = $result;
					
					$result = 'resulted';
					
					$preventMultiTap = true;


				} else if ($summed == true) {



				}; //end if/then $operating

			}; //end if/then check $display != 0

		} else if (this.innerText == '=') {

			if ($operating == true && ($numberTwo != 0) && ($operator != '')) {
				$operating = false;
				$display.value = eval($numberOne + $operator + $numberTwo);
				$summed = true;
				$preventMultiTap = true;
			}

		}

	}); //end click event

} //end find all fxn buttons