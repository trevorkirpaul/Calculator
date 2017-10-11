var $buttons = document.getElementsByClassName('divBtn');

for ( var i = 0; i < $buttons.length; i++) {
	$buttons[i].addEventListener('click', function() {

		var $display = document.getElementById('inpDisplay');

		

		//CE, C

		if (this.innerText === 'C' || this.innerText === 'CE') {

			$display.value = '';

		} else if (this.innerText === '+') {

			if ($display.value !== '') {

				$display.value += this.innerText;

			};

		} else if (this.innerText === '-') {

			if ($display.value !== '') {

				$display.value += this.innerText;

			};

		} else if (this.innerText === '*') {

			if ($display.value !== '') {

				$display.value += this.innerText;

			};

		} else if (this.innerText === '/') {

			$display.value += this.innerText;

		} else if (this.className === 'divBtn number') {

			$display.value += this.innerText;

		} else if (this.innerText === '=') {

			$display.value =  eval($display.value);


		} else if (this.innerText === 'del') {

			if ($display.value !== '') {
				var $length = ($display.value.length) - 1;


				$display.value = $display.value.slice(0, $length);
			}

		}//end if this.innerText


		

	});
}