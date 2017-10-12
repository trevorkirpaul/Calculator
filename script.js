var $numberOne = 0;
var $numberTwo = 0;
var $result = 0;

var $operating = false;
var $operator;
var $preventMultiTap = false;
var $summed = false;
var $isDecimal = false;


var $display = document.getElementById('inpDisplay');
var $spanOp = document.getElementById('spanOp');

var $numButtons = document.getElementsByClassName('number');
var $fxnButtons = document.getElementsByClassName('divBtn');



//find all num buttons

for (var i = 0; i < $numButtons.length; i++) {

	$numButtons[i].addEventListener('click', function() {

		if ($operating == false && $summed == false) {

			if ($display.value == 0 && $isDecimal == false) {
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
			$isDecimal = false;

		} else if (this.innerText == '+' || this.innerText == '-' || this.innerText == '*' || this.innerText == '/' ) {

			if ($display.value != 0) {
				
				$isDecimal = false;
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

			} else if ($display.value == '0' && $isDecimal == true) {



			} ; //end if/then check $display != 0

		} else if (this.innerText == '=') {

			if ($operating == true && ($numberTwo != 0) && ($operator != '')) {
				$isDecimal = false;
				$operating = false;
				$display.value = eval($numberOne + $operator + $numberTwo);
				$summed = true;
				$preventMultiTap = true;
				$spanOp.innerHTML = '<p>Calculation complete!</p> Press CE to restart';

			}

		} else if (this.innerText == 'del') {

			if ($display.value != 0 && isNaN($display.value) === false) {

				var $length = $display.value.length;
				$display.value = $display.value.slice(0, -1);
				if ($operator == false) {
					$numberOne = $numberOne.slice(0, -1);
				} else if ($operating == true) {
					$numberTwo = $numberTwo.slice(0, -1);
				};

			} //end if check for del btn conditions
		} else if (this.innerText == '+/-') {

			if ($operating == false){
				if ( ( (Number($display.value)) == (Math.abs(Number($display.value))) == true )) {

					$display.value = -Math.abs(Number($display.value));
					$numberOne = -Math.abs(Number($numberOne));

				} else if ( ( (Number($display.value)) == (Math.abs(Number($display.value))) == false )) {

					$display.value = Math.abs(Number($display.value));
					$numberOne = Math.abs(Number($numberOne));

				} //end if/then check for $display being a pos/neg number whiles operating ($numberOne)

			} else if ($operating == true) {

				if (isNaN($display.value) == false ) {

					if ( ( (Number($display.value)) == (Math.abs(Number($display.value))) == true )) {

						$display.value = -Math.abs(Number($display.value));
						$numberTwo = -Math.abs(Number($numberTwo));

					} else if ( ( (Number($display.value)) == (Math.abs(Number($display.value))) == false )) {

						$display.value = Math.abs(Number($display.value));
						$numberTwo = Math.abs(Number($numberTwo));

					} //end if/then check for pos/neg display whiles operating ($numberTwo)

				} //check if display.value is operator symbol

			} //end $operating = false if/then

		} else if (this.innerText == '.') {


			if ($operating == false) {

				if ($isDecimal == false) {
					$display.value = $display.value + '.';
					$numberOne = $numberOne + '.';
					$isDecimal = true;
				}


			} else if ($operating == true) {

				if ($isDecimal == false) {
					$display.value = $display.value + '.';
					$numberTwo = $numberTwo + '.';
					isDecimal = true;
				}



			} //end if/then check for $operating



		} //end check for button innertext!










	}); //end click event

} //end find all fxn buttons