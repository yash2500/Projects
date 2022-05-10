import React from 'react'

const Header = (props) => {

  return (
    <div>
        <h1>Hello {props.name} {props.lastname}</h1>
        {props.children}
    </div>
  )
}

export default Header