import React from "react";

function Timer (props) {
  
  return (
    <div>
      
      <h1 id="time-left" className="text-danger" style={{fontSize:150}}>{props.minutes < 10 ? `0${props.minutes}` : props.minutes}:{props.seconds < 10 ? `0${props.seconds}` : props.seconds}</h1>
      <h4 id="timer-label" className="text-info">{props.timerType}</h4>
      <button className="btn btn-primary" id="start_stop" onClick={props.handleTicking}><i className={props.ticking ? "fa fa-stop" : "fa fa-play"}></i> {props.ticking ? "Stop" : "Start"}</button>
      <button className="btn btn-danger" id="reset" onClick={props.handleReset}><i className="fa fa-undo"></i> Reset</button>
      
    </div>
  )
}

export default Timer;