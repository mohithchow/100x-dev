class Calculator {
  constructor() {
  this.result = 0;
  }
   
  add(number) {
  if (isNaN(number)) throw new Error("Invalid input");
  this.result += number;
  }
   
  subtract(number) {
  if (isNaN(number)) throw new Error("Invalid input");
  this.result -= number;
  }
   
  multiply(number) {
  if (isNaN(number)) throw new Error("Invalid input");
  this.result *= number;
  }
   
  divide(number) {
  if (isNaN(number) || number === 0) throw new Error("Invalid input");
  this.result /= number;
  }
   
  clear() {
  this.result = 0;
  }
   
  getResult() {
  return this.result;
  }
   
  // COPIED FROM CHAT GPT:
  // Method to calculate arithmetic expression
  calculate(expression) {
  // Remove continuous spaces and validate the expression for invalid characters
  const formattedExpression = expression
  .replace(/\s+/g, "")
  .replace(/[^\d+\-*/().]/g, "");
   
  // Validate parentheses in the expression
  const parenthesesCount = formattedExpression
  .split("")
  .reduce((count, char) => {
  if (char === "(") count++;
  else if (char === ")") count--;
  if (count < 0) throw new Error("Invalid parentheses");
  return count;
  }, 0);
  if (parenthesesCount !== 0) throw new Error("Invalid parentheses");
   
  // Evaluate the expression
  try {
  this.result = eval(formattedExpression); // Use eval to perform the calculation
  if (!isFinite(this.result)) throw new Error("Invalid result");
  } catch (error) {
  throw new Error("Invalid expression");
  }
  }
  }
   
  module.exports = Calculator;