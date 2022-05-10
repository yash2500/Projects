import React from 'react'

function FunctionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello Event handling...");
    }

  return (
    <>
        <a href='https://www.google.com/' onClick={changeEvent}>Function Click Me</a>
    </>
  )
}

export default FunctionClick