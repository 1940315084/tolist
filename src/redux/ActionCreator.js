import {ADD_TODO} from './ActionTypes.js';
import {TOGGLE_COMPLETE} from './ActionTypes.js';
import {CHANGE_DISPLAY} from './ActionTypes.js';
import {DELETE} from './ActionTypes.js';
let actions = {
  //添加待办事项
  addTo: function(payload) {
    return {type: ADD_TODO, payload};
  },
  //更改完成状态，此处payload传id
  toggleComplete: function(payload) {
    return {type: TOGGLE_COMPLETE, payload};
  },
  //更改显示待办项的状态，
  //payload为以下3个值（all,uncompleted,completed）
  changeDisplay: function(payload) {
    return {type: CHANGE_DISPLAY, payload};
  },
  deletes: function(payload) {
    return {type: DELETE, payload};
  }
};

export default actions;//导出ActionCreatorss