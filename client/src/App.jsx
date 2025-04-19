import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleCalculate = async () => {
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: input }),
      })
      const data = await response.json()
      setResult(data.result)
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResult('Error')
    }
  }

  const handleButtonClick = (value) => {
    setInput(prev => prev + value)
  }

  const handleClear = () => {
    setInput('')
    setResult('')
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="input"
        />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={handleCalculate} className="equals">=</button>
        </div>
      </div>
    </div>
  )
}

export default App;