// 2019112163 박창수
import React, {Component} from "react";

class EnterId extends Component {
    constructor(props) {
        super(props);
        this.state = { userId: ''};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.userId);
    }
    myChangeHandler = (event) => {
        this.setState({userId: event.target.value});
    }
    render() {
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h2>Your Student Id {this.state.userId}</h2>
                <p>Enter your student id:</p>
            <input type='text' onChange={this.myChangeHandler}/>
            <input type='submit'/>
            </form>

        );
    }
}

class StdInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            std_name: '',
            age: null,
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age"){
            if(!Number(val)){
                alert("Your age must be a number.");
            }
        }
        this.setState({[nam]: val});
    }

    render() {
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h2>Your Student Id {this.state.std_name}, age {this.state.age}</h2>
                <p>Enter your student Id and your age</p>
                <input type='text' name='std_name' onChange={this.myChangeHandler}/>
                <input type='text' name='age' onChange={this.myChangeHandler}/>
            </form>
        );
    }
}

export default StdInfo;