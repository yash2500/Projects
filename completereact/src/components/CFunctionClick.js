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

    const numbers = [3,4,5,6];
    const newNumbers = numbers.map((numbers) => {
        console.log(numbers);
        return <li>{numbers}</li>
    })

    return (
      <>
        <button onClick={this.changeEvent}>Class Click Me</button>
        <br />
        {this.state.course}
        <br />
        {this.state.roll}
        <ul>{newNumbers}</ul>
      </>
    )
  }
}

export default CFunctionClick