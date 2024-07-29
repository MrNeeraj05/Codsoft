function display(value) {
    document.getElementById("result").value += value;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    let expression = document.getElementById("result").value;
  
    try {
      // Evaluate the expression using eval() (be cautious with security implications)
      let result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      // Handle errors (e.g., division by zero, invalid expression)
      document.getElementById("result").value = "Error";
      // Optionally, add a class like "calculator.error" for visual feedback
    }
  }
  