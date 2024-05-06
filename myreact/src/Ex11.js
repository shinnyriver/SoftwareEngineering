// 2019112163 박창수
import React, {Component} from "react";


class StdInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdName:'',
            age: null,
            errormessage: '',
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age"){
            if(val !== "" && !Number(val)){
                err = <strong>Your age must be a number.</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        return(
            <form>
                <h2>Your student id {this.state.std_name}, age {this.state.age}</h2>
                <p>Please enter your student ID</p>
            <input type='text' name='std_name' onChange={this.myChangeHandler}/>
            <p>Please enter your age</p>
            <input type='text' name='age' onChange={this.myChangeHandler}/>
            {this.state.errormessage}
            </form>
        );
    }
}

export default StdInfo;