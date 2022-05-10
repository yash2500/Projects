import React from 'react'

function FunctionClick() {

    function changeEvent() {
        console.log("Hello Event handling...");
    }

  return (
    <div>
        <button onClick={changeEvent}>Function Click Me</button>
    </div>
  )
}

export default FunctionClick