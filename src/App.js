import React, { useState } from "react";

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'
}

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
    <div style={style}>
      <h1>Factorial Calculator</h1>
      <form onSubmit={onSubmitHandler} style={{textAlign: 'center'}}>
        <input type="text" placeholder="Enter a number..." value={inputValue} onChange={onChangeHandler}/>
        <br />
        <button type="submit">Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorialValue ? factorialValue : 0}</h2>
    </div>
  );
}

export default App;