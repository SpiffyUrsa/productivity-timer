import React from "react";

/** SessionLength component
 * 
 *  Props:
 *    sessionlength: An integer for how long the session should be.
 *    handleDecrement: A method decreasing the session length.
 *    handleIncrement: A method increasing the session length.
 * 
 *  App -> SessionLength
 */

function SessionLength (props) {
  
  return (
    <div>
      <h3 id="session-label" className="text-info">Session Length</h3>
      <h2 id="session-length" className="text-danger">{props.sessionLength}</h2>
      <button id="session-decrement" className="btn btn-info" onClick={props.handleDecrement}><i className="fa fa-arrow-down"></i> Shorten</button>
      <button id="session-increment" className="btn btn-info" onClick={props.handleIncrement}><i className="fa fa-arrow-up"></i> Lengthen</button>
    </div>
  )
}

export default SessionLength;