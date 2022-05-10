import React, { Component } from 'react'

export class CFunctionClick extends Component {

    constructor(){
        super();
        this.changeEvent=this.changeEvent.bind(this);

        this.state={
            course: "I.T."
        }
    }

    changeEvent = () =>{
        this.setState({
            course: "Computer"
        })
        console.log('Hello Yash', this.state.course);
    }

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Class Click Me</button>
        <br />
        {this.state.course}
      </div>
    )
  }
}

export default CFunctionClick