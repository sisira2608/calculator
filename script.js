    let input = document.getElementById('inputbox');
    let buttons = document.querySelectorAll('input[type="button"]');
    
    let string = "";

    function clearInput() {
      string = "0";
      input.value = string;
    }

    function deleteLast() {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
   
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.value === '=') {
          calculateResult();
        } else if (e.target.value === 'Ac') {
          clearInput();
        } else if (e.target.value === 'DE') {
          deleteLast();
        } else {
          // If '0' is currently displayed, replace it with the new digit
          if (string === '0') {
            string = e.target.value;
          } else {
            string += e.target.value;
          }
          input.value = string;
        }
      });
    });

    function calculateResult() {
      try {
        let result = eval(string);
        input.value = result;
        string = result.toString(); // store the result for further calculations
      } catch (error) {
        alert('Invalid input or calculation error');
      }
    }