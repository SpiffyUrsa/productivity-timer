import React from "react";

/** BreakLength component
 * 
 *  Props:
 *    breakLength: An integer for how long the break should be.
 *    handleDecrement: A method decreasing the break length.
 *    handleIncrement: A method increasing the break length.
 * 
 *  App -> BreakLength
 */

function BreakLength (props) {
  
  return (
    <div>
      <h3 id="break-label" className="text-info">Break Length</h3>
      <h2 id="break-length" className="text-danger">{props.breakLength}</h2>
      <button id="break-decrement" className="btn btn-info" onClick={props.handleDecrement}><i className="fa fa-arrow-down"></i>                Shorten</button>
      <button id="break-increment" className="btn btn-info" onClick={props.handleIncrement}><i className="fa fa-arrow-up"></i> Lengthen</button>
    </div>
  )
}

export default BreakLength;