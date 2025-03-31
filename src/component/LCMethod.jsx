import React from "react";

class LCMethod extends React.Component {
    constructor( props) {
        super();
        console.log("Constructor is called");
        this.state = { count: 0,color:white  };
        console.log(props)
    }

    increment = () => {
        this.setState({ count: this.state.count+1 });
    };
    

    render() {
        console.log("Render Method called");
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default LCMethod;
   