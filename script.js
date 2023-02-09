const numberString = numbersContainer.innerHTML;
numbersContainer.innerHTML = numberString.replace(/<\/div>,<div/g, '</div> - <div');

