import React, { Component } from 'react';
import {connect} from 'react-redux';
//引入actionCreators
import actions from '../redux/ActionCreator.js';
// import './Done.css'
class Todo extends Component {
    constructor(props) {
        super(props);
    }
     //按display条件过滤数据
    // filterDisplay() {
    //     return this.props.todos.filter(item => {
    //         switch (this.props.display) {
    //         case 'completed':
    //             return item.isComplete;
    //         case 'uncompleted':
    //             return !item.isComplete;
    //         case 'all':
    //         default:
    //             return true;
    //     }
    // });
    // }
    todoChange = (event) => {
        //当onChange事件发生时，调用toggleComplete动作
        this.props.toggleComplete(event.target.value);
    }
    //取得未完成的todo数量
    getUnfinishedCount() {
        //this.props.todos就是从connect传入的state数据
        console.log(this.props.todos);
        return this.props.todos.filter((i) => {
        return i.isComplete === false;
        }).length;
    }
    deletee = (event) => {
        // console.log(event.target.getAttribute("data-id"))
        this.props.deletes(event.target.getAttribute("data-id"));
    }
    getTodos() {
        return this.props.todos.map((todo, index) => {
            if(todo.isComplete == false) {
                return (<li key={index}>
                    <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/> 
                        <span>{todo.title}</span>
                    <button type="button" data-id={todo.id} onClick={this.deletee}>删除</button>
                  </li>)
            }
        });
      }
      render() {
        return (<div>
            <h2>正在进行<span>{this.getUnfinishedCount()}</span></h2>
          <ul>
            {this.getTodos()}
          </ul>
        </div>);
      }
}
export default connect((state) => ({
    ...state
  }),actions)(Todo);
// export default Todo;