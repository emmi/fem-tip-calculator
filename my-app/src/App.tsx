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
              className="bill-input"
              placeholder="0"
            ></input>
          </div>
          <div className="tip-selector">TODO</div>
          <div className="people-count">TODO</div>
        </div>
        <div className="results">TODO</div>
      </div>
    </div>
  )
}

export default App
