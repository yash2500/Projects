import React, { Component } from 'react'

export class CFunctionClick extends Component {

    constructor(props){
        super(props);
        this.changeEvent=this.changeEvent.bind(this);

        this.state={
            course: "I.T.",
            roll: this.props.roll
        }
    }

    changeEvent = () =>{
        this.setState({
            course: "Computer"
        })
        console.log('Hello Yash', this.state.course, this.state.roll);
    }

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Class Click Me</button>
        <br />
        {this.state.course}
        <br />
        {this.state.roll}
      </div>
    )
  }
}

export default CFunctionClick