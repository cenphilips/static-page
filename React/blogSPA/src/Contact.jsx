import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {color: 'red', size: '20px', fontWeight: 'bold'}
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1>This is our class component! {this.state.color}</h1>
        <p>The size is: {this.state.size}</p>
        <p style={{fontWeight: this.state.fontWeight}}>This is some bold text: {this.state.fontWeight}</p>
        <p>Contact us at: {this.props.phoneNumber}</p>
        <p>{this.props.gender}</p>
      </div>
    )
  }
}
