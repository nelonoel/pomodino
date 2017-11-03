import React, { Component, PureComponent } from 'react'
import { Online, Offline } from 'react-detect-offline'
import { OnlineTimer, OfflineTimer } from '../Timer'
import dino from '../../assets/dino--still.png'
import './index.css'

class Rules extends PureComponent {
  render() {
    return (
      <div>
        <img src={dino} className="dino" alt="Dino" />
        <h2>Go offline to start the timer.</h2>
        <div className="rules">
          <h3>Rules</h3>
          <ul>
            <li>Earn 1 point for every second that you're offline.</li>
            <li>Earn 1 minute of online time every 5 minutes of offline time.</li>
            <li>Lose 15 points for every second you spend beyond your online time.</li>
          </ul>
        </div>
      </div>
    )
  }
}

class App extends Component {
  state = {
    points: 0,
    offlineTime: 0,
    onlineTime: 0
  }

  addPoints(points) {
    this.setState({ points: this.state.points + points })
  }

  addOfflineTime(seconds) {
    this.setState({ offlineTime: this.state.offlineTime + seconds })
  }

  addOnlineTime(seconds) {
    this.setState({ onlineTime: this.state.onlineTime + seconds })
  }

  render() {
    const { points, offlineTime, onlineTime } = this.state

    return (
      <div className="app">
        <Online>
          { points > 14 ? <OnlineTimer points={points} offlineTime={offlineTime} onlineTime={onlineTime} addPoints={this.addPoints.bind(this)} addOfflineTime={this.addOfflineTime.bind(this)} addOnlineTime={this.addOnlineTime.bind(this)} /> : <Rules /> }
        </Online>
        <Offline>
          <OfflineTimer points={points} offlineTime={offlineTime} onlineTime={onlineTime} addPoints={this.addPoints.bind(this)} addOfflineTime={this.addOfflineTime.bind(this)} addOnlineTime={this.addOnlineTime.bind(this)} />
        </Offline>
      </div>
    )
  }
}

export default App
