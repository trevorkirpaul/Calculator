var $buttons = document.getElementsByClassName('divBtn');
var $numButtons = document.getElementsByClassName('number');
var $display = document.getElementById('inpDisplay');

var $storedNumber;
var $currentOpNum;

var $isOperating = false;
var $clear = false;

var $newNumberEntered = false;



for (var i = 0; i < $buttons.length; i++) {

	//add click event for each button. I'm using an if/then to
	//manually distinguish each key I need specifically

	$buttons[i].addEventListener('click', function(){

		var $btnLabel = this.innerText;
		var $opDisplay = document.getElementById('spanOp');

		if ($btnLabel == 'CE' || $btnLabel == 'C') {

			$display.value = '';
			$storedNumber = '';
			$currentOpNum = '';
			$opDisplay.innerText = '';
			$isOperating = false;
			$clear = false;
		} 

		else if ($btnLabel == '+')	{

			

			//if/then to first check if value in display
			//then check if currently operating
			//if not operating, store number and clear display

			if ($display.value !== '') {

				//check if currently operating

				if ($isOperating === false) {

					$newNumberEntered = false;
					$isOperating = true;
					$opDisplay.innerText = 'add';

					$storedNumber = $display.value;
					$display.value = $storedNumber;
					$clear = false;

				} else {

					// $display.value = Number($display.value) + Number($storedNumber);
					// $storedNumber = $display.value;
					// $clear = false;



					//check if new number entered. If true add display
					// to stored number
					//
					//if false, add old operator

					if ($newNumberEntered === true){

						$currentOpNum = $display.value;
						$display.value = Number($display.value) + Number($storedNumber);
						$storedNumber = $display.value;
					  $clear = false;
					  $newNumberEntered = false;

					}	else {

						$display.value = Number($display.value) + Number($currentOpNum);
						$storedNumber = $display.value;

					}




				}
			}



		} else if ($btnLabel === '-') {

			

		}

		//end of if/then for buttons NaN

	});

};





for (var i = 0; i<$numButtons.length; i++) {

	$numButtons[i].addEventListener('click', function() {

		var $btnLabel = Number(this.innerText);

		$newNumberEntered = true;
		
		
		if ($isOperating === false) {

			$display.value += ($btnLabel);

		} else {

				//if/then to determing initial display clear after operator

				if ($clear === false){			

					$display.value = '';			
					$display.value +=($btnLabel);
					$clear = true;

				} else {

					$display.value +=($btnLabel);

				}
		}




	});

	




};