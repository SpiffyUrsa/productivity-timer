import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25,
      timerSeconds: 0,
      ticking: false,
      timerType: 'Session',
      reset: false
    }
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleTicking = this.handleTicking.bind(this);
    this.tick = this.tick.bind(this);
    this.interval = null;
  }
  
  tick () {
    let min = this.state.timerMinutes;
    let sec = this.state.timerSeconds;
    
    if (sec === 0 && min >= 1) {
      this.setState(prevState => ({
        timerMinutes: prevState.timerMinutes - 1,
        timerSeconds: 59
      }))
    } else if (min === 0 && sec === 0 && this.state.timerType === 'Session') {
      this.setState(prevState => ({
        timerMinutes: prevState.breakLength,
        timerSeconds: 0,
        timerType: 'Break'
      })) 
      
    } else if (min === 0 && sec === 0 && this.state.timerType === 'Break') {
      this.setState(prevState => ({
        timerMinutes: prevState.sessionLength,
        timerSeconds: 0,
        timerType: 'Session'
      }))
    } else {
      this.setState(prevState => ({
        timerSeconds: prevState.timerSeconds - 1
      }))
    }
  }
 
  handleTicking() {
    if (this.state.ticking === false) {
      this.interval = setInterval(this.tick, 1000);
      this.interval;
      this.setState({ticking: true, reset: false});
    } else {
      clearInterval(this.interval);
      this.setState({ticking: false, reset: false});
    }
  }
  
  handleReset () {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25,
      timerSeconds: 0,
      reset: true,
      ticking: false,
      timerType: "Session"
    })
    clearInterval(this.interval);
  }
  
  handleDecrement (event) {
    const {id} = event.target;
  
      if (id === 'break-decrement' && this.state.breakLength > 1) {
        this.setState(prevState => ({
          breakLength: prevState.breakLength - 1
          
      }))
      } else if (id === 'session-decrement' && this.state.sessionLength > 1 && this.state.ticking === false) {
        this.setState(prevState => ({
          sessionLength: prevState.sessionLength - 1,
          timerMinutes: prevState.sessionLength - 1
      }))  
     } else if (id === 'session-decrement' && this.state.sessionLength > 1) {
       this.setState(prevState => ({
          sessionLength: prevState.sessionLength - 1
       }))
     }
  }
  
  handleIncrement (event) {
    const {id} = event.target;
    if (id === 'break-increment' && this.state.breakLength < 60) {
      this.setState(prevState => ({
        breakLength: prevState.breakLength + 1
      }))
    } else if (id === 'session-increment' && this.state.sessionLength < 60 && this.state.ticking === false) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1,
        timerMinutes: prevState.sessionLength + 1
      }))
    } else if (id === 'session-increment' && this.state.sessionLength < 60) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1
      }))
    }
  }
 
  render () {
    var beep = document.getElementById("beep");
    if (this.state.timerMinutes === 0 && this.state.timerSeconds === 0) {
      beep.play();
    } else if (this.state.reset) {
      beep.pause();
      beep.currentTime = 0;
    }
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className = "col-md-6 text-center">    
             <BreakLength 
              breakLength={this.state.breakLength} 
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
            />
          </div>
          <div className = "col-md-6 text-center">
            <SessionLength 
              sessionLength={this.state.sessionLength} 
              handleDecrement={this.handleDecrement}
              handleIncrement={this.handleIncrement}
            />
          </div>
        </div>
          <div className="text-center">
            <Timer 
              minutes={this.state.timerMinutes} 
              seconds={this.state.timerSeconds} 
              ticking={this.state.ticking} 
              handleReset={this.handleReset}
              handleTicking={this.handleTicking}
              tick={this.tick}
              timerType={this.state.timerType}
            />
          </div>
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto" />
          <br />
          <br />
          <br />
        <h5 className="text-center">Coded by Jonathan Wong</h5>
      </div>
    )
  }
}

export default App;
