import React from "react"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="splitter">
        <h1>splitter</h1>
      </div>
      <div className="calculator">
        <div className="settings">
          <div className="bill">
            <label htmlFor="bill">Bill</label>
            <input
              type="text"
              id="bill"
              className="input-field--dollar"
              placeholder="0"
            ></input>
          </div>
          <div className="tip-selector">
            <label htmlFor="tip-amount">Select Tip %</label>
            <div className="tip-amount-buttons">
              {/* TODO: make this dynamic */}
              <button className="button">5%</button>
              <button className="button">10%</button>
              <button className="button">15%</button>
              <button className="button">25%</button>
              <button className="button">50%</button>
              <button className="button button--light">Custom</button>
            </div>
          </div>
          <div className="people-count">
            <label htmlFor="people-count">Number of People</label>
            <input
              type="text"
              id="people-count"
              className="input-field--person"
              placeholder="0"
            ></input>
          </div>
        </div>
        <div className="results">
          <div className="result-row">
            <label htmlFor="" className="label--light">
              <p className="results-row-label main-label">Tip Amount</p>
              <p className="results-row-label sub-label">/ person</p>
            </label>
            <p className="result-value">$0.00</p>
          </div>
          <div className="result-row">
            <label htmlFor="" className="label--light">
              <p className="results-row-label main-label">Total</p>
              <p className="results-row-label sub-label">/ person</p>
            </label>
            <p className="result-value">$0.00</p>
          </div>
          <div className="button-container">
            <button className="button reset-button">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
