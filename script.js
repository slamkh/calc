const buttons = document.querySelectorAll('button'),
      display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clckBtnVal = event.target.value;
  if (clckBtnVal === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clckBtnVal === 'C') {
    display.value = '';
  } else {
    display.value += clckBtnVal;
  }
}
