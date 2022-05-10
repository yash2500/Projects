import React, { Component } from 'react'

export class CHeader extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} {this.props.lastname}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default CHeader