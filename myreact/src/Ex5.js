import React, { Component } from 'react';

class Ex5 extends Component {
  constructor(props) {
    super(props); // 부모 클래스의 constructor 호출
    this.company_name = props.company_name;
    this.staff_name = props.staff_name;
  }

  render() {
    return (
      <div>
        <h1>How to answer a phone when a customer calls.</h1>
        <p>Welcome to {this.company_name} Customer Service. My name is {this.staff_name}. How can I help you?</p>
      </div>
    );
  }
}

export default Ex5;
