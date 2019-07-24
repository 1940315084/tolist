import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
//引入actionCreators
import actions from '../redux/ActionCreator.js';
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleClick(e) {
        // console.log(this.props.addTo)
        this.props.addTo({
            id: parseInt(Math.random() * 10000000),
            isComplete: false,
            title: this.state.input
        })
    }
    render() {
        return (
            <div>
              <input onChange={(e)=>this.handleInput(e)}></input><button onClick={(e)=>this.handleClick(e)}>确认</button>
            </div>
        )
    }
}
export default connect((state) => ({
    ...state
  }),actions)(AddTodo);
//   export default AddTodo;