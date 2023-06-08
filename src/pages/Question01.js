import { useState } from 'react'

function Question01() {
  const [init, setInit] = useState('')
  const [inputValue, setinputValue] = useState('')

  const calculate = (init) => {
    if (!init) {
      return '請輸入數字...'
    } else {
      const newInit = Number(init)
      let aa = []
      let bb = []
      switch (newInit) {
        case 0:
          return 0
        case 1:
          return newInit
        case 2:
          return newInit + 1
        default:
          for (let i = 3; i < newInit + 1; i = i + 2) {
            aa.push(-i)
          }
          for (let j = 2; j < newInit + 1; j = j + 2) {
            bb.push(j)
          }
          const aaTotal = aa.reduce((x, y) => x + y)
          const bbTotal = bb.reduce((x, y) => x + y)
          const Total = 1 + aaTotal + bbTotal

          return Total
      }
    }
  }
  const handleCalculate = (init) => {
    setinputValue(calculate(init))
  }

  return (
    <div className="container">
      <input
        type="text"
        value={init}
        onChange={(e) => {
          setInit(e.target.value)
        }}
        onClick={() => {
          setInit('')
          setinputValue('')
        }}
      />
      <button
        onClick={() => {
          handleCalculate(init)
        }}
      >
        calculate
      </button>
      <h2>
        =
        {inputValue === Number(init) && inputValue !== ''
          ? `${inputValue} (計算完囉~)`
          : inputValue}
      </h2>
    </div>
  )
}

export default Question01
