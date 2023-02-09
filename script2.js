for (let i = 0; i < quantity; i++) {
    const number = Math.floor(Math.random() * maxNumber) + 1;
    const numberElement = document.createElement("div");
    numberElement.classList.add("number");
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  }
  
  const numberString = numbersContainer.innerHTML;
  numbersContainer.innerHTML = numberString.replace(/<\/div>,<div/g, '</div> - <div');
  