// 2019112163 박창수
import React, {Component} from "react";

class StudentInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {stdName: "Su Jin"};
    }

    shouldComponentUpdate(){
        return false;
    }

    changeName = () => {
        this.setState({stdName: "Chang Su"});
    }
    render() {
        return (
            <div>
                <h1>The student's name is {this.state.stdName}</h1>
                <button type="button" onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default StudentInfo;