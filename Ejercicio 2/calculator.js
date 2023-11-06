document.addEventListener('DOMContentLoaded', function () {
    
    /* Este evento asegura que JavaScript se ejecute después de que la página se ha cargado completamente.*/

    const operand1 = document.getElementById('operand1');
    const operand2 = document.getElementById('operand2');
    const sumButton = document.getElementById('sum');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const result = document.getElementById('result');

    /* Aca se obtienen referencias a varios elementos HTML por su ID para interactuar con ellos en JavaScript.*/
  
    sumButton.addEventListener('click', function () {

        /* Se agrega un evento 'click' al botón de suma*/

      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);

      /* Se obtienen los valores de los campos de entrada y se convierten a números flotantes*/

      const sum = num1 + num2;
      result.textContent = sum;

      /* Se realiza la suma y se actualiza el contenido del elemento 'result' con el resultado*/
    });
  
    subtractButton.addEventListener('click', function () {

        /* Similarmente, se agregan eventos 'click' para los botones de resta, multiplicación y división*/

      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const difference = num1 - num2;
      result.textContent = difference;
    });
  
    multiplyButton.addEventListener('click', function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const product = num1 * num2;
      result.textContent = product;
    });
  
    divideButton.addEventListener('click', function () {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      if (num2 !== 0) {
        const quotient = num1 / num2;
        result.textContent = quotient;
      } else {
        result.textContent = 'Error: División por cero';

        /* Mensaje de error si se divide por cero*/
        
      }
    });
  });
  