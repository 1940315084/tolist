// import * as ActionTypes from './ActionTypes.js';
import {ADD_TODO} from './ActionTypes.js';
import {TOGGLE_COMPLETE} from './ActionTypes.js';
import {CHANGE_DISPLAY} from './ActionTypes.js';
import {DELETE} from './ActionTypes.js';
//定义默认状态
let initState = {
  display:'all', 
  todos: [
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: 'ddd'
    }
  ]
};
function reducer(state=initState,action){
  let newState;
  switch (action.type) {
    case ADD_TODO:
      newState = {
        todos: [
          ...state.todos,
          action.payload
        ]
      };
      break;
    case TOGGLE_COMPLETE:
      newState = {
        //循环每一条待办，把要修改的记录更新
        todos: state.todos.map(item => {
          if (item.id == action.payload) {
            item.isComplete = !item.isComplete;
          }
          return item;
        })
      };
      break;
    case CHANGE_DISPLAY:
      newState = {
        display: action.payload,
        todos: [...state.todos]
      };
      break;
    case DELETE: 
      console.log('action.id',action.payload);
      console.log(state.todos);
      // state.todos.splice(state.todos.findIndex(item => item.id === action.payload), 1)
      newState = {
        //循环每一条待办，把要修改的记录更新
          todos: state.todos.filter(item => {
              if (item.id != action.payload) {
                return item;
              }
          })
      };
    break;
    default:
      newState = state;
      break;
  }
  return newState;
}
export default reducer;