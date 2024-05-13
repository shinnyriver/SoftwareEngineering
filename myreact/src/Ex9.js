// 2019112163 박창수
import React, {Component} from "react";

class Student extends Component {
    state = {
      name: ''
    };
  
    handleChange = (event) => {
      this.setState({ name: event.target.value });
    };
  
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