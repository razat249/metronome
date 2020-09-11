import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import * as Tone from "tone"

const handlePlay = (bpm = 100) => {
  const second = 60/bpm
  console.log({second})
  const synth = new Tone.Synth().toDestination()
  const now = Tone.now()
  let j = 0
  for (let i = 0; i < 100; i += j) {
    synth.triggerAttackRelease("C4", "8n", now + i)
    synth.triggerAttackRelease("D4", "8n", now + i + .02)
    synth.triggerAttackRelease("E4", "8n", now + i + .05)
    for (j = second; j < second * 4; j += second) {
      synth.triggerAttackRelease("D4", "8n", now + i + j)
    }
  }
}

function App() {
  const [bpm, setBpm] = useState(100)
  const handleBPMChange = (e) => {
    setBpm(Number(e.target.value))
  }
  console.log({bpm})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="number" onChange={handleBPMChange} />
        <br/>
        <button onClick={() => handlePlay(bpm)}>Play</button>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default App
