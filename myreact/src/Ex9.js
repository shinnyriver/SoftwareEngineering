// 2019112163 박창수
import React, {Component} from "react";

class Student extends Component {
    state = {
      name: ''
    };
  
    // handleChange 함수를 화살표 함수로 변환
    handleChange = (event) => {
      this.setState({ name: event.target.value });
    };
  
    // handleClick 함수를 화살표 함수로 변환
    handleClick = () => {
      alert('Submitted: ' + this.state.name);
    };
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      );
    }
  }
  
  export default Student;