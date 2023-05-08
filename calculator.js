let expression = '';
function appendValue(value) {
    expression += value;
    document.getElementById('result').value = expression;
    flashButtons();
  } 
 
  function clearText() {
    expression = '';
    document.getElementById('result').value = '';
  }
  
  function flashButtons() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
      button.classList.add('flash');
      setTimeout(() => {
        button.classList.remove('flash');
      }, 300);
    });
  }


function appendOp(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error please check';
    expression = '';
  }
}

function Modulo() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = Number.isInteger(result) ? result : result.toFixed(2);
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error please check';
    expression = '';
  }
}

function Square() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = Math.pow(result, 2);
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error please check';
    expression = '';
  }
}

