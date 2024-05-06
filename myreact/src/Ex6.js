// 2019112163 박창수
import React, {Component} from "react";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Apple',
      model: 'iphone pro',
      color: 'gold',
      year: 2020
    };
  }

  // 색상 변경 메서드
  changeColor = () => {
    this.setState({
      color: this.state.color === 'gold' ? 'silver' : 'gold'
    });
  };

  render() {
    return (
      <div>
        <h4>2019112163 박창수</h4>
        <h1>My {this.state.brand} Phone</h1>
        <p>It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
        <button onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Phone;
