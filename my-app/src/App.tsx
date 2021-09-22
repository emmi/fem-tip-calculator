import React, { useState } from "react"
import "./App.css"
import InputField from "./components/InputField"

const PERCENTAGE_OPTIONS = [5, 10, 15, 25, 50]

enum State {
  Changed = "CHANGED",
  NotChanged = "NOT CHANGED"
}

function App() {
  const [bill, setBill] = useState(0)
  const [peopleCount, setPeopleCount] = useState(0)

  const [state, updateState] = useState(State.NotChanged)

  const [selectedPercentage, setSelectedPercentage] = useState(null)

  const [results, setResults] = useState({ tipAmount: 0, totalAmount: 0 })

  const onSelectPercentage = (e: any) => {
    setSelectedPercentage(e.target.id)
    updateState(State.Changed)
  }

  const onReset = (e: any) => {
    e.preventDefault()
    setBill(0)
    setPeopleCount(0)
    setSelectedPercentage(null)
    setResults({ tipAmount: 0, totalAmount: 0 })
  }

  const percentageOptions = PERCENTAGE_OPTIONS.map(option => (
    <button
      id={option.toString()}
      className={`button ${
        selectedPercentage === option.toString() ? "button--selected" : ""
      }`}
      onClick={onSelectPercentage}
    >
      {option}%
    </button>
  )).concat(
    <button
      className="button button--light"
      onClick={() => console.log("TODO")}
    >
      Custom
    </button>
  )

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
          {/* <div className="bill">
            <label htmlFor="bill">Bill</label>
            <input
              type="number"
              id="bill"
              className={`input-field--dollar ${
                bill.toString() === "0" ? "input--empty" : ""
              }`}
              placeholder="0"
              value={bill}
              pattern="^[0-9]*$"
              onChange={(e: any) => {
                if (!e.target.validity.patternMismatch && e.target.value >= 0) {
                  setBill(e.target.value)
                  updateState(State.Changed)
                }
              }}
            ></input>
          </div> */}
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
          {/* <div className="people-count">
            <label htmlFor="people-count">Number of People</label>
            <input
              type="number"
              id="people-count"
              className={`input-field--person ${
                peopleCount.toString() === "0" ? "input--empty" : ""
              }`}
              placeholder="0"
              value={peopleCount}
              pattern="^[0-9]*$"
              onChange={(e: any) => {
                if (!e.target.validity.patternMismatch && e.target.value >= 0) {
                  setPeopleCount(e.target.value)
                  updateState(State.Changed)
                }
              }}
            ></input> */}
          {/* </div> */}
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
