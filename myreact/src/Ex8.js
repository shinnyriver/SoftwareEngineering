// 2019112163 박창수
import React, {Component} from "react";

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child />
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount(){
        alert("The component named Header is about to be unmounted.");
    }
    render(){
        return (
            <h1>Information and Communication Engineering!</h1>
        );
    }
}

export default Container;