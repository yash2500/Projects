import React, { Component } from 'react'

export class Channel extends Component {

    constructor(){
        super();
        this.state={
            msg: 'Yash Chhatrala ReactJS Developer'
        }
    }

    like(){
        this.setState({
            msg: 'Thanks for like my profile'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => {this.like()}}>Like</button>
      </div>
    )
  }
}

export default Channel