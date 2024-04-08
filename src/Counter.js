import { React, Component } from "react";


    class Counter extends Component {
        constructor(props) {
          super(props);
          this.state = {
            counter: 0
          };
        }
      
        increaseCounter = () => {
          this.setState((prevState) => ({
            counter: prevState.counter + 1
          }));
        };
      
        render() {
          return (
            <button className="increment" onClick={this.increaseCounter}>
              Counter: {this.state.counter}
            </button>
          );
        }
      }
      


export default Counter;
    

