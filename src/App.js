import React, { useState } from "react";

const App = () => {

  const [ inputValue, setInputValue ] = useState('');
  const [ factorialValue, setFactorialValue ] = useState('');

  const onChangeHandler = e => {
    if(/^[0-9]*$/g.test(e.target.value)) {
      setInputValue(e.target.value)
    }
  }

  const factorial = value => {
    if (value === 0) {
      return 1
    }
    return value * factorial(value - 1)
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    if (inputValue !== '') {
      setFactorialValue(factorial(inputValue))
    } else {
      setFactorialValue(0)
    }
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter a number..." value={inputValue} onChange={onChangeHandler}/>
        <br />
        <button type="submit">Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorialValue ? factorialValue : 0}</h2>
    </div>
  );
}

export default App;