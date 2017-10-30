import React, { Component } from 'react'
import { Online, Offline } from 'react-detect-offline'
import dino from '../../assets/dino.gif'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={dino} className="dino" alt="Dino" />
        <Online>
          <h2 className="center">Go offline to start timer!</h2>
          <div className="rules">
            <h3>Rules</h3>
            <ul>
              <li>You earn 1 point for every second that you're offline.</li>
              <li>You earn 1 minute of online time every 5 minutes of offline time.</li>
              <li>You lose 60 points for every second you go beyond your online time.</li>
            </ul>
          </div>
        </Online>
        <Offline>
        </Offline>
      </div>
    )
  }
}

export default App
