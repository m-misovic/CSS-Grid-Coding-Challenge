var btn = document.querySelector('button');
btn.addEventListener('click', draw);

function draw() {
	var divContainer = document.querySelector('#container');
	divContainer.innerHTML = '';

	var selectedColor = document.querySelector('select').value;
	var size = document.querySelector('input').value;
	size = parseInt(size, 10);

	document.querySelector('#pageTitle').style.color = selectedColor;
	var percent = (100 - (size - 1) * 1) / size + '%'; // (100% container - (number of gaps) * 1%)) / size
	divContainer.style.gridTemplateColumns = 'repeat(' + size + ', ' + percent + ')';
	divContainer.style.gridTemplateRows = 'repeat(' + size + ', ' + percent + ')';
	divContainer.style.gridGap = '1%';
	divContainer.style.borderColor = selectedColor;

	if (size >= 2 && size <= 50) {
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				var divSquare = document.createElement('div');
				divSquare.style.background = selectedColor;
				if (i === j) {
					divSquare.style.background = 'yellow';
				}
				divSquare.style.borderRadius = '7px';
				divContainer.appendChild(divSquare);
			}
		}
	} else {
		divContainer.innerHTML = `<div id="welcomeText">
                                    <h3>Please, pick a number between 2 and 50!</h3>
                                  </div>`;
		divContainer.style.gridTemplateColumns = '100%';
		divContainer.style.gridTemplateRows = '100%';
	}
}
