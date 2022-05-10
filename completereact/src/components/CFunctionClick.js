import React, { Component } from 'react'

export class CFunctionClick extends Component {

    changeEvent(){
        console.log('Hello Yash');
    }

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Class Click Me</button>
      </div>
    )
  }
}

export default CFunctionClick