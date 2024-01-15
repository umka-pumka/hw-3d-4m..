import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (Number(num2) === 0) {
      setResult("Error: Cannot divide by 0");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const handlePower = () => {
    setResult(Math.pow(Number(num1), Number(num2)));
  };

  const handleSquareRoot = () => {
    setResult(Math.sqrt(Number(num1)));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <button onClick={handlePower}>^</button>
      <button onClick={handleSquareRoot}>√</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;