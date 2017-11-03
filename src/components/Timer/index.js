import React, { Component } from 'react'
import dino from '../../assets/dino.gif'

export class OfflineTimer extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.addPoints(1)
      this.props.addOfflineTime(1)
      this.props.addOnlineTime(0.2)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { points, offlineTime, onlineTime } = this.props

    return (
      <div className="timers">
        <img src={dino} className="offline dino" alt="Dino" />
        <div className="timer points">
          <h1>{points}</h1>
          <p>Points</p>
        </div>
        <div className="timer">
          <h1>{offlineTime}</h1>
          <p>Offline Time</p>
        </div>
        <div className="timer">
          <h1>{onlineTime}</h1>
          <p>Online Time</p>
        </div>
      </div>
    )
  }
}

export class OnlineTimer extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      const { onlineTime, addOnlineTime, addPoints } = this.props

      if (onlineTime > 0) {
        addOnlineTime(-1)
      } else {
        addPoints(-15)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { points, offlineTime, onlineTime } = this.props

    return (
      <div className="timers">
        <img src={dino} className="offline dino" alt="Dino" />
        <div className="timer points">
          <h1>{points}</h1>
          <p>Points</p>
        </div>
        <div className="timer">
          <h1>{offlineTime}</h1>
          <p>Offline Time</p>
        </div>
        <div className="timer">
          <h1>{onlineTime}</h1>
          <p>Online Time</p>
        </div>
      </div>
    )
  }
}