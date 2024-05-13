import React from "react";
import ReactDOM from "react-dom";
import "./myfirst.scss";

class FirstClass extends React.Component {
  render() {
    return (
        <div>
            <h1>My first ever scss!</h1>
            <p>Why don't we add some style?</p>
        </div>
    );
  }
}

export default FirstClass;
ReactDOM.render(<FirstClass />, document.getElementById('root'));