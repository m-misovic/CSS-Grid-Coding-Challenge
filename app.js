var btn = document.querySelector('button');
var colorInput = document.querySelector('#color-input');
var sizeInput = document.querySelector('#size-input');
var pickedSize = document.querySelector('#picked-size');

btn.addEventListener('click', draw);

sizeInput.addEventListener('input', function() {
	pickedSize.innerHTML = `<span>${sizeInput.value}</span>`;
	pickedSize.style.opacity = '0.8';
});

sizeInput.addEventListener('change', function() {
	setTimeout(function() {
		pickedSize.style.opacity = '0';
	}, 500);
});

function draw() {
	var container = document.querySelector('#container');
	container.innerHTML = '';

	var color = colorInput.value;
	var size = sizeInput.value;

	var percent = (100 - (size - 1) * 1) / size + '%'; // (100% container - (number of gaps) * 1%)) / size
	container.style.gridTemplateColumns = 'repeat(' + size + ', ' + percent + ')';
	container.style.gridTemplateRows = 'repeat(' + size + ', ' + percent + ')';
	container.style.gridGap = '1%';
	container.style.borderColor = color;

	if (size >= 2 && size <= 50) {
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				var divSquare = document.createElement('div');
				divSquare.style.background = color;
				if (i === j) {
					divSquare.style.background = 'yellow';
				}
				divSquare.style.borderRadius = '2px';
				container.appendChild(divSquare);
			}
		}
	} else {
		container.innerHTML = `<div id="welcome-text">
									<h3>Please, pick a number between 2 and 50!</h3>
								</div>`;
		container.style.gridTemplateColumns = '100%';
		container.style.gridTemplateRows = '100%';
	}
}
