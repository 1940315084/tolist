import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
//引入actionCreators
import actions from '../redux/ActionCreator.js';
// import './Done.css'
class Done extends React.Component {
    constructor(props) {
        super(props);
    }
     //按display条件过滤数据
    // filterDisplay() {
    //     return this.props.todos.filter(item => {
    //         switch (this.propsdisplay) {
    //             case 'completed':
    //                 return item.isComplete;
    //             case 'uncompleted':
    //                 return !item.isComplete;
    //             case 'all':
    //             default:
    //                 return true;
    //     }
    // });
    // }
    todoChange = (event) => {
        //当onChange事件发生时，调用toggleComplete动作
        this.props.toggleComplete(event.target.value);
    }
    //取得已经完成的todo数量
    getUnfinishedCount() {
        //this.props.todos就是从connect传入的state数据
        // console.log(this.props.todos);
        return this.props.todos.filter((i) => {
            return i.isComplete === true;
            }).length;
    }
    delete = (event) => {
        // console.log(event.target.getAttribute("data-id"))
        this.props.deletes(event.target.getAttribute("data-id"))
    }
    getTodos() {
        return this.props.todos.map((todo, index) => {
            if(todo.isComplete == true) {
                return (<li key={index}>
                    <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/> 
                        <del>{todo.title}</del>
                    <button type="button" data-id={todo.id} onClick={this.delete}>删除</button>
                  </li>)
            }
        });
      }
      render() {
        return (<div>
            <h2>已经完成<span>{this.getUnfinishedCount()}</span></h2>
          <ul>
            {this.getTodos()}
          </ul>
        </div>);
      }
}
export default connect((state) => ({
    ...state
  }),actions)(Done);
// export default Todo;