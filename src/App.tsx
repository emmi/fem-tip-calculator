import React, { useState } from "react"
import "./App.css"
import InputField from "./components/InputField"
import Button from "./components/Button"

const PERCENTAGE_OPTIONS = [5, 10, 15, 25, 50]
const CUSTOM_BUTTON_ID = PERCENTAGE_OPTIONS.length

enum State {
  Changed = "CHANGED",
  NotChanged = "NOT CHANGED"
}

function App() {
  const [bill, setBill] = useState(0)
  const [peopleCount, setPeopleCount] = useState(0)

  const [state, updateState] = useState(State.NotChanged)

  const [selectedButtonId, setSelectedButtonId] = useState(-1)
  const [selectedPercentage, setSelectedPercentage] = useState(0)

  const [results, setResults] = useState({ tipAmount: 0, totalAmount: 0 })

  const onSelectPercentage = (e: any) => {
    setSelectedButtonId(parseInt(e.target.id))

    if (
      parseInt(e.target.id) === CUSTOM_BUTTON_ID &&
      selectedButtonId !== CUSTOM_BUTTON_ID
    ) {
      setSelectedPercentage(0)
    } else {
      setSelectedPercentage(PERCENTAGE_OPTIONS[e.target.id])
      updateState(State.Changed)
    }
  }

  const onReset = (e: any) => {
    e.preventDefault()
    setBill(0)
    setPeopleCount(0)
    setSelectedPercentage(0)
    setSelectedButtonId(-1)
    setResults({ tipAmount: 0, totalAmount: 0 })
  }

  const percentageOptions = [...Array(6)].map((_, id) => {
    if (id === CUSTOM_BUTTON_ID && selectedButtonId === CUSTOM_BUTTON_ID) {
      return (
        <input
          type="number"
          id={"custom-input"}
          className="button input-field--custom"
          placeholder="0"
          value={selectedPercentage}
          pattern="^[0-9]*$"
          onChange={(e: any) => {
            if (!e.target.validity.patternMismatch && e.target.value >= 0) {
              setSelectedPercentage(e.target.value)
              updateState(State.Changed)
            }
          }}
        ></input>
      )
    }

    return (
      <Button
        id={id}
        onClick={onSelectPercentage}
        selectedPercentage={selectedPercentage}
        options={PERCENTAGE_OPTIONS}
        customButtonId={CUSTOM_BUTTON_ID}
      />
    )
  })

  if (
    bill > 0 &&
    !!selectedPercentage &&
    peopleCount > 0 &&
    state === State.Changed
  ) {
    const percentage = 1 + selectedPercentage / 100
    const totalAmount = (bill * percentage) / peopleCount
    const tipAmount = totalAmount - bill / peopleCount

    setResults({ tipAmount, totalAmount })
    updateState(State.NotChanged)
  }

  return (
    <div className="App">
      <div className="splitter">
        <h1>splitter</h1>
      </div>
      <div className="calculator">
        <div className="settings">
          <InputField
            label="Bill"
            type="bill"
            value={bill}
            onChange={(e: any) => {
              if (!e.target.validity.patternMismatch && e.target.value >= 0) {
                setBill(e.target.value)
                updateState(State.Changed)
              }
            }}
          />
          <div className="tip-selector">
            <label htmlFor="tip-amount">Select Tip %</label>
            <div className="tip-amount-buttons">{percentageOptions}</div>
          </div>
          <InputField
            label="Number of People"
            type="people"
            value={peopleCount}
            onChange={(e: any) => {
              if (!e.target.validity.patternMismatch && e.target.value >= 0) {
                setPeopleCount(e.target.value)
                updateState(State.Changed)
              }
            }}
          />
        </div>
        <div className="results">
          <div className="result-row">
            <label htmlFor="" className="label--light">
              <p className="results-row-label main-label">Tip Amount</p>
              <p className="results-row-label sub-label">/ person</p>
            </label>
            <p className="result-value">${results.tipAmount.toFixed(2)}</p>
          </div>
          <div className="result-row">
            <label htmlFor="" className="label--light">
              <p className="results-row-label main-label">Total</p>
              <p className="results-row-label sub-label">/ person</p>
            </label>
            <p className="result-value">${results.totalAmount.toFixed(2)}</p>
          </div>
          <div className="button-container">
            <button
              disabled={bill === 0 || !selectedPercentage || peopleCount === 0}
              className="button reset-button"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
